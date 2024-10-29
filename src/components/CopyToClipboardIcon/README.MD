# CopyToClipboardIcon

## Notes

### Refactor of Google Chrome Extension Github **Offscreen Clipboard** example

`https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/functional-samples/cookbook.offscreen-clipboard-write/offscreen.js`

I refactored the functional example from Google's developer page by (1) updating my `manifest.json`, (2) adding the javascript from `background.js` to my `index.js` file within my `pages/Background/` folder and (3) I extracted the code from `offscreen.html` and `offscreen.js` and inserted it into a ne wcomponent called `OffscreenClipboard`.  Currently I am able to click the icon within my `CopyToClipboardIcon` which logs the following to my Sidepanel's dev tools console: "Sending message to background script to copy to clipboard: [data]" which in my test case was the 16 character ID `2019013001175001`.  Also, the `alert` displayed in my browser window **(`"${value}" is copied to clipboard!`);** which is code from the `handleClick` function within the `CopyToClipboardIcon` component.  Furthermore, the chrome extension's service-worker's console displayed the message "Received message" and displayed the object below as intended.  Now I'm trying to debug the process to figure out why the code in my `OffscreenClipboard` is not working as expected.

Received message: 
```
{
    "type": "copy-data-to-clipboard",
    "target": "offscreen-doc",
    "data": "2019012800445003"
}
```

### Explanation of the Code Flow

1. `CopyToClipboardIcon` Component:
   - When the icon is clicked, it sends a message to the background script with the data to be copied.
   - The message includes the type `copy-data-to-clipboard`, the target `offscreen-doc`, and the `data` to be copied.

2. Background Script (`index.js`):
   - Receives the message from the `CopyToClipboardIcon` component.
   - Creates an offscreen document and sends the message to it.

3. `OffscreenClipboard` Component:
   - Receives the message from the background script.
   - Writes the data to the clipboard using the pre-rendered `<textarea>` element with the id `copied-text`.

#### Detailed Steps

1. `CopyToClipboardIcon` Component:
- The `handleClick` function sends a message to the background script with the data to be copied.
- The message includes the type `copy-data-to-clipboard`, the target `offscreen-doc`, and the `data` to be copied.

```javascript
// src/components/CopyToClipboardIcon/CopyToClipboardIcon.jsx
import React, { useState } from 'react';
import './CopyToClipboardIcon.css';

const hoverMessage = 'Copy search data to clipboard';

const CopyToClipboardIcon = ({ value }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = async () => {
        try {
            console.log('Sending message to background script to copy to clipboard:', value); // Debugging statement
            await chrome.runtime.sendMessage({
                type: 'copy-data-to-clipboard',
                target: 'offscreen-doc',
                data: value
            });
            alert(`"${value}" is copied to clipboard!`);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className="copy-to-clipboard-icon--container">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="icon-duplicate"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
            >
                <rect width="14" height="14" x="3" y="3" className="secondary" rx="2"></rect>
                <rect width="14" height="14" x="7" y="7" className="primary" rx="2"></rect>
            </svg>
            {isHovered && (
                <div className="hover-message">
                    {hoverMessage}
                </div>
            )}
        </div>
    );
};

export default CopyToClipboardIcon;
```

2. Background Script (`/src/pages/Background/index.js`):
   - The background script receives the message and logs it.
   - It then creates an offscreen document using `chrome.offscreen.createDocument`.
     - What document is being created exactly?  Is this different from the `textarea` element and/or the `OffscreenClipboard.jsx` component?
   - After creating the offscreen document, it sends the message to the offscreen document.

```javascript
// src/pages/Background/index.js
console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: false })
    .catch((error) => console.error(error));

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Received message:', message);

    if (message.type === 'toggle_side_panel') {
        const { isOpen, tabId } = message.payload;
        if (isOpen) {
            chrome.sidePanel.setOptions({ tabId, enabled: false })
                .then(() => {
                    chrome.storage.local.get('state', (result) => {
                        const state = result.state || {};
                        state.isSidepanelOpen = false;
                        chrome.storage.local.set({ state }, () => {
                            sendResponse({ success: true });
                        });
                    });
                })
                .catch((error) => {
                    console.error('Failed to close side panel:', error);
                    sendResponse({ success: false, error });
                });
        } else {
            chrome.sidePanel.open({ tabId })
                .then(() => {
                    return chrome.sidePanel.setOptions({ tabId, path: 'sidepanel.html', enabled: true });
                })
                .then(() => {
                    chrome.storage.local.get('state', (result) => {
                        const state = result.state || {};
                        state.isSidepanelOpen = true;
                        chrome.storage.local.set({ state }, () => {
                            sendResponse({ success: true });
                        });
                    });
                })
                .catch((error) => {
                    console.error('Failed to open side panel:', error);
                    sendResponse({ success: false, error });
                });
        }
        return true;
    } else if (message.type === 'update_state') {
        chrome.storage.local.set({ state: message.payload }, () => {
            sendResponse({ success: true });
        });
        return true;
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Received message:', message); 

    if (message.type === 'resize_side_panel') {
        const { width } = message.payload;
        console.log(`Resizing window to ${width}px`); 

        if (isNaN(width) || width <= 0) {
            console.error('Invalid width received:', width);
            sendResponse({ success: false, error: 'Invalid width' });
            return;
        }

        chrome.windows.getCurrent((window) => {
            chrome.windows.update(window.id, { width });
        });
        sendResponse({ success: true });
        return true; 
    }
});

// COPY TO CLIPBOARD RELATED CODE
async function addToClipboard(value) {
    console.log('Creating offscreen document to copy to clipboard:', value); // Debugging statement
    await chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: [chrome.offscreen.Reason.CLIPBOARD],
      justification: 'Write text to the clipboard.'
    });
  
    chrome.runtime.sendMessage({
      type: 'copy-data-to-clipboard',
      target: 'offscreen-doc',
      data: value
    });
}
```

3.  `OffscreenClipboard` Component:
    - The `handleMessages` function processes incoming messages and calls `handleClipboardWrite` if the message type is `copy-data-to-clipboard`.
    - The `handleClipboardWrite` function writes the data to the clipboard using the pre-rendered `<textarea>` element with the id `copied-text`.

```javascript
// src/components/CopyToClipboardIcon/OffscreenClipboard/OffscreenClipboard.jsx
import React, { useEffect } from 'react';

const OffscreenClipboard = () => {
    // Sets up a message listener to handle messages from the background script.
    useEffect(() => {
        // Defines `handleMessages` to process incoming messages and call `handleClipboardWrite` if the message type is `copy-data-to-clipboard`.
        const handleMessages = async (message) => {
            console.log('Received message in offscreen component:', message); // Debugging statement
            if (message.target !== 'offscreen-doc') {
                return;
            }

            switch (message.type) {
                case 'copy-data-to-clipboard':
                    handleClipboardWrite(message.data);
                    break;
                default:
                    console.warn(`Unexpected message type received: '${message.type}'.`);
            }
        };

        // Defines `handleClipboardWrite` to write data to the clipboard using the pre-rendered `<textarea>` element.
        const handleClipboardWrite = async (data) => {
            try {
                console.log('Writing to clipboard:', data); // Debugging statement
                if (typeof data !== 'string') {
                    throw new TypeError(`Value provided must be a 'string', got '${typeof data}'.`);
                }

                const textEl = document.getElementById('copied-text');
                textEl.value = data;
                textEl.select();
                const successful = document.execCommand('copy');
                console.log('Copy command was successful:', successful); // Debugging statement
            } catch (error) {
                console.error('Error writing to clipboard:', error); // Debugging statement
            }
        };

        chrome.runtime.onMessage.addListener(handleMessages);

        // Cleanup listener on component unmount
        return () => {
            chrome.runtime.onMessage.removeListener(handleMessages);
        };
    }, []);

    return (
        <div>
            <h1>OffscreenClipboard</h1>
            <textarea id="copied-text" style={{ position: 'absolute', left: '-9999px' }}></textarea>
        </div>
    );
};

export default OffscreenClipboard;
```
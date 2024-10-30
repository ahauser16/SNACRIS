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
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Received message:', message);

    if (message.type === 'copy-data-to-clipboard') {
        console.log('Calling addToClipboard with value:', message.data); // Debugging statement
        addToClipboard(message.data);
    }
});


// Solution 1 - As of Jan 2023, service workers cannot directly interact with the system clipboard using either `navigator.clipboard` or `document.execCommand()`. To work around this, we'll create an offscreen document and pass it the data we want to write to the clipboard.
async function addToClipboard(value) {
    console.log('Creating offscreen document to copy to clipboard:', value); // Debugging statement
    try {
        await chrome.offscreen.createDocument({
            url: 'src/components/CopyToClipboardIcon/offscreen.html',
            reasons: [chrome.offscreen.Reason.CLIPBOARD],
            justification: 'Write text to the clipboard.'
        });
        console.log('Offscreen document created successfully'); // Debugging statement

        // Now that we have an offscreen document, we can dispatch the message.
        console.log('Sending message to offscreen document:', value); // Debugging statement
        chrome.runtime.sendMessage({
            type: 'copy-data-to-clipboard',
            target: 'offscreen-doc',
            data: value
        });
    } catch (error) {
        console.error('Error creating offscreen document:', error); // Debugging statement
    }
}
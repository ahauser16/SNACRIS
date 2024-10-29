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
    } else if (message.type === 'copy-data-to-clipboard') {
        sendMessageToOffscreenClipboard(message.data);
    }
});

// COPY TO CLIPBOARD RELATED CODE
function sendMessageToOffscreenClipboard(value) {
    console.log('Sending message to OffscreenClipboard component:', value); // Debugging statement

    chrome.runtime.sendMessage({
        type: 'copy-data-to-clipboard',
        target: 'offscreen-doc',
        data: value
    });
}
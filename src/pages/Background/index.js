// src/pages/Background/index.js
console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: false })
    .catch((error) => console.error(error));

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
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
        return true; // Keep the message channel open for sendResponse
    } else if (message.type === 'update_state') {
        chrome.storage.local.set({ state: message.payload }, () => {
            sendResponse({ success: true });
        });
        return true; // Keep the message channel open for sendResponse
    }
});
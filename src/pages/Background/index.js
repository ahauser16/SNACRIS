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
            chrome.sidePanel.setOptions({ tabId, enabled: false });
        } else {
            chrome.sidePanel.open({ tabId });
            chrome.sidePanel.setOptions({ tabId, path: 'sidepanel.html', enabled: true });
        }
        sendResponse({ success: true });
    }
});
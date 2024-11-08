// src/components/CopyToClipboardIcon/OffscreenClipboard/OffscreenClipboard.jsx
import React, { useEffect } from 'react';

const OffscreenClipboard = () => {
    //Sets up a message listener to handle messages from the background script.
    useEffect(() => {

        //Defines `handleMessages` to process incoming messages and call `handleClipboardWrite` if the message type is `copy-data-to-clipboard`.
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

        //Defines `handleClipboardWrite` to write data to the clipboard using a dynamically created `<textarea>` element.
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
            <textarea id="copied-text"></textarea>
        </div>
    );
};

export default OffscreenClipboard;
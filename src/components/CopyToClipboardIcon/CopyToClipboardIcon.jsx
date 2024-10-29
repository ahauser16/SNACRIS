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


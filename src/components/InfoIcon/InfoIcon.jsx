import React from 'react';
import './InfoIcon.css';

const InfoIcon = ({ isHovered, setIsHovered, hoverMessage }) => (
    <div
        // className="hover-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon-help"
        >
            <path
                className="primary"
                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"
            />
            <path
                className="secondary"
                d="M12 19.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.5a1 1 0 0 1-2 0v-1.41a1 1 0 0 1 .55-.9L14 10.5C14.64 10.08 15 9.53 15 9c0-1.03-1.3-2-3-2-1.35 0-2.49.62-2.87 1.43a1 1 0 0 1-1.8-.86C8.05 6.01 9.92 5 12 5c2.7 0 5 1.72 5 4 0 1.3-.76 2.46-2.05 3.24L13 13.2V14z"
            />
        </svg>
        {isHovered && (
            <div className="hover-message">
                {hoverMessage}
            </div>
        )}
    </div>
);

export default InfoIcon;
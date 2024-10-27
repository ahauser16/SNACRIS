// src/components/AddToLocalStorageIcon/AddToLocalStorageIcon.jsx
import React from 'react';
import './AddToLocalStorageIcon.css';

const hoverMessage = 'Save search term to local storage';

const AddToLocalStorageIcon = ({ isHovered, setIsHovered, onClick }) => (
    <div
        className="local-storage-icon--container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-add-square">
            <rect width="18" height="18" x="3" y="3" className="primary" rx="2"></rect>
            <path className="secondary" d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z"></path>
        </svg>
        {isHovered && (
            <div className="hover-message">
                {hoverMessage}
            </div>
        )}
    </div>
);

export default AddToLocalStorageIcon;
// src/components/SubNav/SubNav.jsx
import React from 'react';
import './SubNav.css';

const SubNav = ({  }) => {

    const handleResize = () => {
        const newWidth = 500;
        console.log(`Resizing to ${newWidth}px`);
        chrome.runtime.sendMessage({
            type: 'resize_side_panel',
            payload: { width: newWidth }
        }, (response) => {
            console.log('Response from background:', response);
        });
    };

    return (
        <div className="sub-navbar--container">
            <div className="subnav-col--container">
                <button className="subnav-col-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon-order-horizontal"
                    >
                        <path
                            className="secondary"
                            d="M18.59 17H9a1 1 0 0 1 0-2h9.59l-2.3-2.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l2.3-2.3z"
                        ></path>
                        <path
                            className="primary"
                            d="M5.41 7H15a1 1 0 0 1 0 2H5.41l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L5.4 7z"
                        ></path>
                    </svg>
                    <span className="btn-text">Resize Sidebar</span>
                </button>
                <div className="subnav-col-content--container">
                    <button className="" onClick={handleResize}>Resize to 500px</button>
                </div>
            </div>
        </div>
    );
}

export default SubNav;

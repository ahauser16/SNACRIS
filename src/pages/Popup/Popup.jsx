// src/pages/Popup/Popup.jsx
import React from 'react';
import SidePanelBtn from '../../components/Buttons/SidePanelBtn';
import './Popup.css';

const Popup = () => {
  return (
    <div className="popup-container">
      <header className="popup-header">
        <h1>Welcome to SNACRIS</h1>
      </header>
      <body className="popup-body">
        <SidePanelBtn />
      </body>
    </div>
  );
};

export default Popup;

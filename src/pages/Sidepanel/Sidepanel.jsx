// src/pages/Sidepanel/Sidepanel.jsx
import React from "react";
import './Sidepanel.css';
import SidepanelMenu from '../../components/SidepanelMenu/SidepanelMenu';

const Sidepanel = () => {
 
  return (
    <div className="App" id="app-container">
      <SidepanelMenu />
    </div>
  );
}

export default Sidepanel;
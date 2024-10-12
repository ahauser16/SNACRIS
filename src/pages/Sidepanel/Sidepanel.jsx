// src/pages/Sidepanel/Sidepanel.jsx
import React, { useState, useEffect } from "react";
import './Sidepanel.css';
import SidepanelMenu from '../../components/SidepanelMenu/SidepanelMenu';
import SubNav from '../../components/SubNav/SubNav';

const Sidepanel = () => {
 
  return (
    <div className="App" id="app-container">
      <SidepanelMenu />
      <SubNav />
    </div>
  );
}

export default Sidepanel;
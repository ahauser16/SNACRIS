// src/pages/Sidepanel/SidePanelBtn.jsx 
import React, { useState } from 'react';

const SidePanelBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidePanel = async () => {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const tabId = tab.id;

    chrome.runtime.sendMessage(
      { type: 'toggle_side_panel', payload: { isOpen, tabId } },
      (response) => {
        if (response.success) {
          setIsOpen(!isOpen);
        }
      }
    );
  };

  return (
    <button onClick={toggleSidePanel}>
      {isOpen ? 'Close Side Panel' : 'Open Side Panel'}
    </button>
  );
};

export default SidePanelBtn;
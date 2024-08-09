import React, { useState } from 'react';

const SidePanelBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidePanel = () => {
    if (isOpen) {
      chrome.sidePanel.setOptions({ enabled: false });
    } else {
      chrome.sidePanel.setOptions({ path: 'sidepanel.html', enabled: true });
    }
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={toggleSidePanel}>
      {isOpen ? 'Close Side Panel' : 'Open Side Panel'}
    </button>
  );
};

export default SidePanelBtn;
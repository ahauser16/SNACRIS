// src/components/Buttons/SidePanelBtn.jsx 
import React, { useContext } from 'react';
import { StateContext } from '../../context/StateProvider';

const SidePanelBtn = () => {
  const { state, setState } = useContext(StateContext);

  const toggleSidePanel = async () => {
    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tabs.length === 0) {
        throw new Error('No active tab found');
      }
      const tabId = tabs[0].id;
      const isOpen = state.isSidepanelOpen;

      chrome.runtime.sendMessage(
        { type: 'toggle_side_panel', payload: { isOpen, tabId } },
        (response) => {
          if (response.success) {
            setState((prevState) => ({
              ...prevState,
              isSidepanelOpen: !isOpen,
            }));
          }
        }
      );
    } catch (error) {
      console.error('Failed to toggle side panel:', error);
    }
  };

  return (
    <button onClick={toggleSidePanel}>
      {state.isSidepanelOpen ? 'Close Side Panel' : 'Open Side Panel'}
    </button>
  );
};

export default SidePanelBtn;
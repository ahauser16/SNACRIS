// src/context/StateProvider.js
import React, { createContext, useState, useEffect } from 'react';

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem('state');
    return savedState ? JSON.parse(savedState) : { isSidepanelOpen: false };
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const handleMessage = (message, sender, sendResponse) => {
      if (message.type === 'get_state') {
        sendResponse({ state });
      } else if (message.type === 'set_state') {
        setState(message.payload);
        sendResponse({ success: true });
      }
      return true; // Keep the message channel open for sendResponse
    };

    chrome.runtime.onMessage.addListener(handleMessage);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, [state]);

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
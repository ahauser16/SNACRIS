// src/pages/Popup/Popup.jsx
import React, { useContext, useState } from 'react';
import SidePanelBtn from '../../components/Buttons/SidePanelBtn';
import { StateContext } from '../../context/StateProvider';
import './Popup.css';

const Popup = () => {
  const { state, setState } = useContext(StateContext);
  const [favoriteWord, setFavoriteWord] = useState(state.favoriteWord || '');

  const handleInputChange = (e) => {
    setFavoriteWord(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newState = { ...state, favoriteWord };
    setState(newState);
    chrome.runtime.sendMessage({ type: 'update_state', payload: newState }, (response) => {
      if (response.success) {
        console.log('State updated successfully');
      }
    });
  };

  return (
    <>
      <h1>Welcome to SNACRIS</h1>
      <SidePanelBtn />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="favoriteWord"
          value={favoriteWord}
          onChange={handleInputChange}
        />
        <button type="submit">Save Favorite Word</button>
      </form>
    </>
  );
};

export default Popup;
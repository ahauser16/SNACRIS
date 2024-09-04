import React from 'react';
import logo from '../../assets/img/logo.svg';
import SidePanelBtn from '../Sidepanel/SidePanelBtn';
import SearchByDocIdForm from '../../components/SearchByDocIdForm/SearchByDocIdForm';

import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
      <SidePanelBtn />
      <SearchByDocIdForm />
    </div>
  );
};

export default Popup;

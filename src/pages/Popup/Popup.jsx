// src/pages/Popup/Popup.jsx
import React from 'react';
// import SearchByDocIdForm from '../../components/SearchByDocIdForm/SearchByDocIdForm';
// import SearchByPartyNameForm from '../../components/SearchByPartyNameForm/SearchByPartyNameForm';
import FormTableContainer from '../../components/FormTableContainer/FormTableContainer';
import './Popup.css';

const Popup = () => {
  return (
    <div className="popup-container">
      <header className="popup-header">
        <h1>Welcome to SNACRIS</h1>
      </header>
      <body className="popup-body">
        {/* <SearchByDocIdForm />
        <SearchByPartyNameForm /> */}
        <FormTableContainer />
      </body>
    </div>
  );
};

export default Popup;

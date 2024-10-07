// src/pages/Sidepanel/Sidepanel.jsx
import React, { useContext } from 'react';
import './Sidepanel.css';
import SidepanelMenu from '../../components/SidepanelMenu/SidepanelMenu';
import { StateContext } from '../../context/StateProvider';

const Sidepanel = ({ title }) => {
  const { state, setState } = useContext(StateContext);

  return (
    <div className="SidepanelContainer">
      <SidepanelMenu />
    </div>
  );
};

export default Sidepanel;
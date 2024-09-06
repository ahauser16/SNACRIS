// src/pages/Sidepanel/Sidepanel.tsx
import React from 'react';
import './Sidepanel.css';
import SidepanelMenu from '../../components/SidepanelMenu/SidepanelMenu';


interface Props {
  title: string;
}

const Sidepanel: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="SidepanelContainer">
      {/* <h1>SNACRIS {title}</h1> */}
      <SidepanelMenu />
    </div>
  );
};

export default Sidepanel;
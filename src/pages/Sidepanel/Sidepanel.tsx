// src/pages/Sidepanel/Sidepanel.tsx
import React from 'react';
import './Sidepanel.css';


interface Props {
  title: string;
}

const Sidepanel: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="SidepanelContainer">
      <h1>{title} Page</h1>
    </div>
  );
};

export default Sidepanel;
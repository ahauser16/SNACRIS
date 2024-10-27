//src/pages/Panel/Panel.tsx
import React from 'react';
import './Panel.css';
import DisplayLocalStorage from '../../LocalStorage/DisplayLocalStorage/DisplayLocalStorage';

const Panel: React.FC = () => {
  return (
    <div className="container">
      <DisplayLocalStorage />
    </div>
  );
};

export default Panel;

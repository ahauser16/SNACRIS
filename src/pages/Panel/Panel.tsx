//src/pages/Panel/Panel.tsx
import React from 'react';
import './Panel.css';
import DisplayLocalStorage from '../../LocalStorage/DisplayLocalStorage/DisplayLocalStorage';
// import OffscreenClipboard from '../../components/CopyToClipboardIcon/OffscreenClipboard';


const Panel: React.FC = () => {
  return (
    <div className="container">
      {/* <OffscreenClipboard /> */}
      <DisplayLocalStorage />
    </div>
  );
};

export default Panel;

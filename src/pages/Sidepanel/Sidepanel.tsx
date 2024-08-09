// src/pages/Sidepanel/Sidepanel.tsx
import React from 'react';
import './Sidepanel.css';

interface Props {
  title: string;
}

const Sidepanel: React.FC<Props> = ({ title }: Props) => {
  return <div className="SidepanelContainer">{title} Page</div>;
};

export default Sidepanel;
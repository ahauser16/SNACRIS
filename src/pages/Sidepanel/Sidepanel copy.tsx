// src/pages/Sidepanel/Sidepanel.tsx
import React, { useContext } from 'react';
import './Sidepanel.css';
import SidepanelMenu from '../../components/SidepanelMenu/SidepanelMenu';
import {StateContext} from '../../context/StateProvider';


interface Props {
  title: string;
}

const Sidepanel: React.FC<Props> = ({ title }: Props) => {
  const { state, setState } = useContext(StateContext);

  return (
    <div className="SidepanelContainer">
      <SidepanelMenu />
    </div>
  );
};
   
export default Sidepanel;

// this is the original typescript file for the application but I don't want to use typescript, I want to use javascript. I have tried to convert it to javascript but I am getting an error. This is the javascript file I converted it to: "Sidepanel.jsx"
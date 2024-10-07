// src/pages/Popup/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { StateProvider } from '../../context/StateProvider';
import Popup from './Popup';
import './index.css';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <StateProvider>
        <Popup/>
    </StateProvider>
);

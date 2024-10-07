// src/pages/Sidepanel/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
//template boilerplate above, do not remove
import { StateProvider } from '../../context/StateProvider';
import Sidepanel from './Sidepanel';
import './index.css';

const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <StateProvider>
        <Sidepanel title={'Sidepanel'} />
    </StateProvider>
);
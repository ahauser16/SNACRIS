// src/components/SidepanelMenu/SidepanelMenu.jsx
import React, { useState, useEffect } from 'react';
import FormTableContainer from '../FormTableContainer/FormTableContainer';
import SearchByPartyNameForm from '../SearchByPartyNameForm/SearchByPartyNameForm';
import SearchByAddressForm from '../SearchByAddressForm/SearchByAddressForm';
import SearchByDocTypeForm from '../SearchByDocTypeForm/SearchByDocTypeForm';
import SearchByDocId_CRFNform from '../SearchByDocId_CRFNform/SearchByDocId_CRFNform';
import SearchByTransNumForm from '../SearchByTransNumForm/SearchByTransNumForm';
import SearchByReelPageForm from '../SearchByReelPageForm/SearchByReelPageForm';
import SearchByUCC_FedLienFileNumForm from '../SearchByUCC_FedLienFileNumForm/SearchByUCC_FedLienFileNumForm';
import './SidepanelMenu.css';

const sections = [
  { label: 'Party Name', colorClass: 'color1', letter: 'P', component: SearchByPartyNameForm },
  { label: 'Borough Block Lot', colorClass: 'color2', letter: 'BBL', component: SearchByAddressForm },
  { label: 'Document Type', colorClass: 'color3', letter: 'DT', component: SearchByDocTypeForm },
  { label: 'Doc ID & CRFN', colorClass: 'color4', letter: 'DC', component: SearchByDocId_CRFNform },
  { label: 'Transaction Num', colorClass: 'color5', letter: 'TN', component: SearchByTransNumForm },
  { label: 'UCC & Lien', colorClass: 'color6', letter: 'FN', component: SearchByUCC_FedLienFileNumForm },
  { label: 'Reel & Page', colorClass: 'color7', letter: 'RP', component: SearchByReelPageForm },
];

const SidepanelMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  const ActiveFormComponent = sections[activeIndex].component;
  const activeColorClass = sections[activeIndex].colorClass;

  useEffect(() => {
    document.documentElement.className = activeColorClass;
  }, [activeColorClass]);

  return (
    <div className="nav-form-container">
      <nav className="nav nav--active">
        <ul className="nav__list">
          {sections.map((section, index) => (
            <li key={index} className="nav__item">
              <a href="#" className="nav__link" onClick={() => handleNavClick(index)}>
                <div className={`nav__thumb ${section.colorClass}`} data-letter={section.letter}></div>
                <p className="nav__label">{section.label}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`pageViewer ${activeColorClass}`}>
        <FormTableContainer activeForm={ActiveFormComponent} colorClass={activeColorClass} />
      </div>
    </div>
  );
};

export default SidepanelMenu;
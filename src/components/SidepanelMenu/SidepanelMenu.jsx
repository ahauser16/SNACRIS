// src/components/SidepanelMenu/SidepanelMenu.jsx
import React, { useState, useEffect } from "react";
import FormTableContainer from "../FormTableContainer/FormTableContainer";
import SearchByPartyNameForm from "../forms/SearchByPartyNameForm/SearchByPartyNameForm.jsx";
import SearchByPartyNameHybridForm from "../forms/SearchByPartyNameHybridForm/SearchByPartyNameHybridForm";
import SearchByAddressForm from "../forms/SearchByAddressForm/SearchByAddressForm.jsx";
import SearchByDocTypeForm from "../forms/SearchByDocTypeForm/SearchByDocTypeForm.jsx";
import SearchByDocIdCrfnForm from "../forms/SearchByDocIdCrfnForm/SearchByDocIdCrfnForm.jsx";
import SearchByTransNumForm from "../forms/SearchByTransNumForm/SearchByTransNumForm.jsx";
import SearchByReelPageForm from "../forms/SearchByReelPageForm/SearchByReelPageForm";
import SearchByUccFedLienFileNumForm from "../forms/SearchByUccFedLienFileNumForm/SearchByUccFedLienFileNumForm.jsx";
import FormTestArea from "../CustomFormStyling/FormTestArea.jsx";
import SidepanelHomescreen from "./HomeScreen/SidepanelHomescreen.jsx";
import { SidepanelHomescreenIcon, PartyNameIcon, BBLIcon, DocTypeIcon, DocIdCrfnIcon, TransNumIcon, UccLienIcon, ReelPageIcon, SidepanelMenuIcon, FormTestAreaIcon } from "./SidepanelIcons.jsx";

import "./SidepanelMenu.css";
import "../CustomFormStyling/css/CustomFormStyling.css";

const SidepanelMenu = () => {
  const sections = [
    {
      sectionName: "Home",
      sectionNameDesc: "Homepage",
      sectionNameAbbreviated: "HOME",
      component: SidepanelHomescreen,
      sectionIcon: <SidepanelHomescreenIcon />,
    },
    {
      sectionName: "Party Name Hybrid",
      sectionNameDesc: "Search by Party Name & Additional Criteria",
      sectionNameAbbreviated: "PNH",
      component: SearchByPartyNameHybridForm,
      sectionIcon: <PartyNameIcon />,
    },
    {
      sectionName: "Party Name",
      sectionNameDesc: "Search by Party Name",
      sectionNameAbbreviated: "PN",
      component: SearchByPartyNameForm,
      sectionIcon: <PartyNameIcon />,
    },
    {
      sectionName: "Borough Block Lot",
      sectionNameDesc: "Search by property identifier of borough, block and lot",
      sectionNameAbbreviated: "BBL",
      component: SearchByAddressForm,
      sectionIcon: <BBLIcon />,
    },
    {
      sectionName: "Document Type",
      sectionNameDesc: "Search by type of document",
      sectionNameAbbreviated: "DT",
      component: SearchByDocTypeForm,
      sectionIcon: <DocTypeIcon />,
    },
    {
      sectionName: "Transaction Number",
      sectionNameDesc: "Search by Transaction Number assigned to cover pages on or after January 2, 2003.",
      sectionNameAbbreviated: "TN",
      component: SearchByTransNumForm,
      sectionIcon: <TransNumIcon />,
    },
    {
      sectionName: "Document ID & CRFN",
      sectionNameDesc: "Search by Document ID or CRFN assigned to documents recorded on or after January 2, 2003",
      sectionNameAbbreviated: "DC",
      component: SearchByDocIdCrfnForm,
      sectionIcon: <DocIdCrfnIcon />,
    },
    {
      sectionName: "UCC & Lien",
      sectionNameDesc: "Search by file number assigned to UCC/Federal Liens prior to January 2, 2003.",
      sectionNameAbbreviated: "FN",
      component: SearchByUccFedLienFileNumForm,
      sectionIcon: <UccLienIcon />,
    },
    {
      sectionName: "Reel & Page",
      sectionNameDesc: "Search by microfilm reel/page assigned to documents prior to January 2, 2003",
      sectionNameAbbreviated: "RP",
      component: SearchByReelPageForm,
      sectionIcon: <ReelPageIcon />,
    },
    {
      sectionName: "Form Test Area",
      sectionNameDesc: "This is a test area for custom form styling",
      sectionNameAbbreviated: "TA",
      component: FormTestArea,
      sectionIcon: <FormTestAreaIcon />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [formStates, setFormStates] = useState(sections.map(() => ({ data: { data: [] }, error: null })));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (index) => {
    setActiveIndex(index);
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const ActiveFormComponent = sections[activeIndex].component;

  const setData = (index, data) => {
    setFormStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].data = data;
      return newStates;
    });
  };

  const setError = (index, error) => {
    setFormStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].error = error;
      return newStates;
    });
  };

  return (
    <div className="nav-form-container">
      <nav className={`nav ${menuOpen ? 'nav--active' : ''}`}>

        <ul className="nav-list">
          {menuOpen ? (
            sections.map((section, index) => (
              <li
                key={index}
                className="nav-item"
              >
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => handleNavClick(index)}
                >
                  <div className="nav-icon--container">
                    {section.sectionIcon}
                  </div>
                  <p className="nav-section-name-text">{section.sectionName}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-information"><path className="primary" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path><path className="secondary" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                </a>
              </li>
            ))
          ) : (
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={toggleMenu}
              >
                <div className="nav-icon--container">
                  {sections[activeIndex].sectionIcon}
                </div>
                <p className="nav-section-name-text">{sections[activeIndex].sectionName}</p>
              </a>
            </li>
          )}
        </ul>
        <div
          className="menu-icon--container"
          onClick={toggleMenu}
        >
          <SidepanelMenuIcon />
        </div>
      </nav>
      <div className="pageViewer">
        <FormTableContainer
          activeForm={ActiveFormComponent}
          data={formStates[activeIndex].data}
          error={formStates[activeIndex].error}
          setData={(data) => setData(activeIndex, data)}
          setError={(error) => setError(activeIndex, error)}
        />
      </div>
    </div>
  );
};

export default SidepanelMenu;
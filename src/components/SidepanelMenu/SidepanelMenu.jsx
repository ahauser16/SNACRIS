// src/components/SidepanelMenu/SidepanelMenu.jsx
import React, { useState, useEffect } from "react";
import FormTableContainer from "../FormTableContainer/FormTableContainer";
import SearchByPartyNameForm from "../SearchByPartyNameForm/SearchByPartyNameForm";
import SearchByAddressForm from "../SearchByAddressForm/SearchByAddressForm";
import SearchByDocTypeForm from "../SearchByDocTypeForm/SearchByDocTypeForm";
import SearchByDocIdCrfnForm from "../SearchByDocIdCrfnForm/SearchByDocIdCrfnForm";
import SearchByTransNumForm from "../SearchByTransNumForm/SearchByTransNumForm";
import SearchByReelPageForm from "../SearchByReelPageForm/SearchByReelPageForm";
import SearchByUccFedLienFileNumForm from "../SearchByUccFedLienFileNumForm/SearchByUccFedLienFileNumForm";
import FormTestArea from "../CustomFormStyling/FormTestArea.jsx";
import { PartyNameIcon, BBLIcon, DocTypeIcon, DocIdCrfnIcon, TransNumIcon, UccLienIcon, ReelPageIcon, FormTestAreaIcon } from "./SidepanelIcons.jsx";

import "./SidepanelMenu.css";
import "../CustomFormStyling/css/CustomFormStyling.css";

const SidepanelMenu = () => {
  const sections = [
    {
      sectionName: "Party Name",
      sectionNameDesc: "Search by Party Name",
      colorClass: "color1",
      sectionNameAbbreviated: "PN",
      component: SearchByPartyNameForm,
      sectionIcon: <PartyNameIcon />,
    },
    {
      sectionName: "Borough Block Lot",
      sectionNameDesc: "Search by property identifier of borough, block and lot",
      colorClass: "color2",
      sectionNameAbbreviated: "BBL",
      component: SearchByAddressForm,
      sectionIcon: <BBLIcon />,
    },
    {
      sectionName: "Document Type",
      sectionNameDesc: "Search by type of document",
      colorClass: "color3",
      sectionNameAbbreviated: "DT",
      component: SearchByDocTypeForm,
      sectionIcon: <DocTypeIcon />,
    },
    {
      sectionName: "Transaction Number",
      sectionNameDesc: "Search by Transaction Number assigned to cover pages on or after January 2, 2003.",
      colorClass: "color5",
      sectionNameAbbreviated: "TN",
      component: SearchByTransNumForm,
      sectionIcon: <TransNumIcon />,
    },
    {
      sectionName: "Document ID & CRFN",
      sectionNameDesc: "Search by Document ID or CRFN assigned to documents recorded on or after January 2, 2003",
      colorClass: "color4",
      sectionNameAbbreviated: "DC",
      component: SearchByDocIdCrfnForm,
      sectionIcon: <DocIdCrfnIcon />,
    },
    {
      sectionName: "UCC & Lien",
      sectionNameDesc: "Search by file number assigned to UCC/Federal Liens prior to January 2, 2003.",
      colorClass: "color6",
      sectionNameAbbreviated: "FN",
      component: SearchByUccFedLienFileNumForm,
      sectionIcon: <UccLienIcon />,
    },
    {
      sectionName: "Reel & Page",
      sectionNameDesc: "Search by microfilm reel/page assigned to documents prior to January 2, 2003",
      colorClass: "color7",
      sectionNameAbbreviated: "RP",
      component: SearchByReelPageForm,
      sectionIcon: <ReelPageIcon />,
    },
    {
      sectionName: "Form Test Area",
      sectionNameDesc: "This is a test area for custom form styling",
      colorClass: "color8",
      sectionNameAbbreviated: "TA",
      component: FormTestArea,
      sectionIcon: <FormTestAreaIcon />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [formStates, setFormStates] = useState(sections.map(() => ({ data: { data: [] }, error: null })));

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  const ActiveFormComponent = sections[activeIndex].component;
  const activeColorClass = sections[activeIndex].colorClass;

  useEffect(() => {
    document.documentElement.className = activeColorClass;
  }, [activeColorClass]);

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
      <nav className="nav nav--active">
        <ul className="nav-list">
          {sections.map((section, index) => (
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
                <p className="nav-section-desc-text">{section.sectionNameDesc}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-information"><path className="primary" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path><path className="secondary" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`pageViewer ${activeColorClass}`}>
        <FormTableContainer
          activeForm={ActiveFormComponent}
          colorClass={activeColorClass}
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
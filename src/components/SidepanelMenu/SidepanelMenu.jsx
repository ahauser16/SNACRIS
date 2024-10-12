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
import SubNav from "../SubNav/SubNav";
import "./SidepanelMenu.css";

const PartyNameIcon = () => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="icon-user"
  >
    <path className="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"></path>
    <path
      className="secondary"
      d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"
    ></path>
  </svg>;
};

const BBLIcon = () => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="icon-office"
  >
    <path
      className="secondary"
      d="M5 9h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm12 2v3h3v-3h-3zm0 5v3h3v-3h-3zm-5 0v3h3v-3h-3zm0-5v3h3v-3h-3z"
    ></path>
    <path
      className="primary"
      d="M9 4h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9v-6H5v6H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1a2 2 0 1 1 4 0z"
    ></path>
  </svg>;
};

const DocTypeIcon = () => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="icon-folder"
  >
    <path
      className="secondary"
      d="M4 4h7l2 2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z"
    ></path>
    <rect width="20" height="12" x="2" y="8" className="primary" rx="2"></rect>
  </svg>;
};

const DocIdCrfnIcon = () => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="icon-document-notes"
  >
    <path
      className="primary"
      d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm2 11a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H8z"
    ></path>
    <polygon className="secondary" points="14 2 20 8 14 8"></polygon>
  </svg>;
};

const TransNumIcon = () => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="icon-receipt"
  >
    <path
      className="primary"
      d="M9 18.41l-2.3 2.3a1 1 0 0 1-1.4 0l-2-2A1 1 0 0 1 3 18V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v13a1 1 0 0 1-.3.7l-2 2a1 1 0 0 1-1.4 0L15 18.42l-2.3 2.3a1 1 0 0 1-1.4 0L9 18.4z"
    ></path>
    <path
      className="secondary"
      d="M7 7h10a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2zm0 4h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"
    ></path>
  </svg>;
};

const UccLienIcon = () => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="icon-library"
  >
    <path
      className="primary"
      d="M3 8h18v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8zm6 3l-1 1v4l1 1H4l1-1v-4l-1-1h5zm5.5 0l-1 1v4l1 1h-5l1-1v-4l-1-1h5zm5.5 0l-1 1v4l1 1h-5l1-1v-4l-1-1h5zM3 20h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
    ></path>
    <path
      className="secondary"
      d="M4 18h16a1 1 0 0 1 1 1v1H3v-1a1 1 0 0 1 1-1zm8.4-15.91l9 4c1 .43.68 1.91-.4 1.91H3c-1.08 0-1.4-1.48-.4-1.91l9-4a1 1 0 0 1 .8 0z"
    ></path>
  </svg>;
};

const ReelPageIcon = () => {
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-film">
    <path
      class="primary"
      d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v2h2V5H4zm0 4v2h2V9H4zm0 4v2h2v-2H4zm0 4v2h2v-2H4zM18 5v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z"
    ></path>
    <path
      class="secondary"
      d="M9 5h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 8h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"
    ></path>
  </svg>;
};

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
    sectionName: "Document ID & CRFN",
    sectionNameDesc:
      "Search by Document ID or CRFN assigned to documents recorded on or after January 2, 2003",
    colorClass: "color4",
    sectionNameAbbreviated: "DC",
    component: SearchByDocIdCrfnForm,
    sectionIcon: <DocIdCrfnIcon />,
  },
  {
    sectionName: "Transaction Number",
    sectionNameDesc:
      "Search by Transaction Number assigned to cover pages on or after January 2, 2003.",
    colorClass: "color5",
    sectionNameAbbreviated: "TN",
    component: SearchByTransNumForm,
    sectionIcon: <TransNumIcon />,
  },
  {
    sectionName: "UCC & Lien",
    sectionNameDesc:
      "Search by file number assigned to UCC/Federal Liens prior to January 2, 2003.",
    colorClass: "color6",
    sectionNameAbbreviated: "FN",
    component: SearchByUccFedLienFileNumForm,
    sectionIcon: <UccLienIcon />,
  },
  {
    sectionName: "Reel & Page",
    sectionNameDesc:
      "Search by microfilm reel/page assigned to documents prior to January 2, 2003",
    colorClass: "color7",
    sectionNameAbbreviated: "RP",
    component: SearchByReelPageForm,
    sectionIcon: <ReelPageIcon />,
  },
];

const SidepanelMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formStates, setFormStates] = useState(
    sections.map(() => ({ data: [], error: null }))
  );

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

  // Split the sections into two halves
  const half = Math.ceil(sections.length / 2);
  const firstHalfSections = sections.slice(0, half);
  const secondHalfSections = sections.slice(half);

  return (
    <div className="nav-form-container">
      <nav className="nav nav--active">
        <div className="nav__column">
          <ul className="nav__list">
            {firstHalfSections.map((section, index) => (
              <li key={index} className="nav__item">
                <a
                  href="#"
                  className="nav__link"
                  onClick={() => handleNavClick(index)}
                >
                  <div
                    className={`nav-icon--container ${section.colorClass}`}
                    // data-letter={section.sectionNameAbbreviated}
                  >
                    {section.sectionIcon}
                  </div>
                  <p className="nav-section-name-text">{section.sectionName}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__column">
          <ul className="nav__list">
            {secondHalfSections.map((section, index) => (
              <li key={index + half} className="nav__item">
                <a
                  href="#"
                  className="nav__link"
                  onClick={() => handleNavClick(index + half)}
                >
                  <div
                    className={`nav-icon--container ${section.colorClass}`}
                    // data-letter={section.sectionNameAbbreviated}
                  ></div>
                  <p className="nav-section-name-text">{section.sectionName}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <SubNav
        colorClass={activeColorClass}
        
      />

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

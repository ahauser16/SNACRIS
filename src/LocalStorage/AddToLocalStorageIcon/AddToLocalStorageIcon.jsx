// src/components/LocalStorage/AddToLocalStorageIcon/AddToLocalStorageIcon.jsx
import React, { useState, useEffect } from 'react';
import './AddToLocalStorageIcon.css';
import { addBaseLevelValue, removeBaseLevelValue, isValueInLocalStorage, getBaseLevelValues } from '../../LocalStorage/LocalStorage';

const hoverMessageAdd = 'Save search term to local storage';
const hoverMessageRemove = 'Remove search term from local storage';

const AddToLocalStorageIcon = ({ dataset, fieldName, value }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const checkIfValueIsAdded = async () => {
      const isInLocalStorage = await isValueInLocalStorage(dataset, fieldName, value);
      setIsAdded(isInLocalStorage);
    };

    checkIfValueIsAdded();
  }, [dataset, fieldName, value]);

  const handleClick = async () => {
    try {
      if (isAdded) {
        await removeBaseLevelValue(dataset, fieldName, value);
        setIsAdded(false);
      } else {
        await addBaseLevelValue(dataset, fieldName, value);
        setIsAdded(true);
      }
      // Trigger a storage change event
      chrome.storage.local.set({ baseLevelValues: await getBaseLevelValues() });
    } catch (error) {
      console.error('Error updating local storage:', error);
    }
  };

  return (
    <div className="local-storage-icon--container">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="icon-add-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <rect width="18" height="18" x="3" y="3" className="primary" rx="2"></rect>
        {isAdded ? (
          isHovered ? (
            <path className="secondary--warning" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"></path>
          ) : (
            <path className="secondary--added" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"></path>
          )
        ) : (
          <path className="secondary" d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z"></path>
        )}
      </svg>
      {isHovered && (
        <div className={`hover-message--container ${isAdded ? 'hover-message-remove' : 'hover-message-add'}`}>
          <span>{isAdded ? hoverMessageRemove : hoverMessageAdd}</span>
        </div>
      )}
    </div>
  );
};

export default AddToLocalStorageIcon;
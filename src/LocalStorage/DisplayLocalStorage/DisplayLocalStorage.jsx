// src/components/DisplayLocalStorage/DisplayLocalStorage.jsx
import React, { useEffect, useState } from 'react';
import './DisplayLocalStorage.css';
import AddToLocalStorageIcon from '../AddToLocalStorageIcon/AddToLocalStorageIcon';

const DisplayLocalStorage = () => {
  const [localStorageData, setLocalStorageData] = useState({});

  const fetchData = () => {
    chrome.storage.local.get('baseLevelValues', (result) => {
      const data = result.baseLevelValues || {};
      setLocalStorageData(data);
    });
  };

  useEffect(() => {
    fetchData();

    const handleStorageChange = (changes, areaName) => {
      if (areaName === 'local' && changes.baseLevelValues) {
        fetchData();
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);

    return () => {
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

  const hasData = (data) => {
    return Object.values(data).some(dataset =>
      Object.values(dataset).some(field => Array.isArray(field) && field.length > 0)
    );
  };

  const renderList = (data) => {
    return Object.keys(data).map((dataset) => (
      <div key={dataset} className="display-local-storage--container">
        <h3>{dataset}</h3>
        <ul>
          {Object.keys(data[dataset]).map((field) => (
            Array.isArray(data[dataset][field]) && data[dataset][field].length > 0 && (
              <li key={field}>
                <strong>{field}:</strong>
                <ul>
                  {data[dataset][field].map((value, index) => (
                    <li key={`${field}-${index}`}>
                      {value}
                      <AddToLocalStorageIcon
                        dataset={dataset}
                        fieldName={field}
                        value={value}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            )
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div>
      <h2>Local Storage Data</h2>
      {hasData(localStorageData) ? (
        renderList(localStorageData)
      ) : (
        <p>No data found in local storage.</p>
      )}
    </div>
  );
};

export default DisplayLocalStorage;
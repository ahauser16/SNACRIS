// src/components/DisplayLocalStorage/DisplayLocalStorage.jsx
import React, { useEffect, useState } from 'react';
import './DisplayLocalStorage.css';

const DisplayLocalStorage = () => {
  const [localStorageData, setLocalStorageData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      const data = JSON.parse(localStorage.getItem('baseLevelValues')) || {};
      setLocalStorageData(data);
    };

    fetchData();
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
            <li key={field}>
              <strong>{field}:</strong> {Array.isArray(data[dataset][field])
                ? data[dataset][field].join(', ')
                : data[dataset][field]}
            </li>
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
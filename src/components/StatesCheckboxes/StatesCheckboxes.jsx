// src/components/StatesCheckboxes/StatesCheckboxes.jsx
import React from 'react';
import States from './States.json';
import './StatesCheckboxes.css';

const StatesCheckboxes = ({ selectedStates, handleStateChange }) => {
  const armedForcesStates = ['DC', 'AP', 'AE', 'AA'];
  const regularStates = States.filter(({ state_code }) => !armedForcesStates.includes(state_code));
  const armedForces = States.filter(({ state_code }) => armedForcesStates.includes(state_code));

  return (
    <div>

      {/* User Favorites section */}
      <fieldset className="favorites-container">
        <legend>My Favorite States</legend>
        {favoriteStates.map(({ state_code, description }) => (
          <div key={state_code} className="state-label-and-checkbox-container">
            <label>
              <input
                type="checkbox"
                name={state_code}
                value={state_code}
                checked={selectedStates.includes(state_code)}
                onChange={handleStateChange}
                aria-label={description}
              />
              {description} ({state_code})
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-close-circle">
              <circle cx="12" cy="12" r="10" className="primary" onClick={() => handleFavoriteToggle(state_code)} />
              <path className="secondary" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z" />
            </svg>
          </div>
        ))}
      </fieldset>

      {/* States Checkboxes */}
      <fieldset className="states-checkboxes-container">
        <legend className="states-checkboxes-legend">States</legend>
        <div className="states-grid">
          <div className="states-column">
            {regularStates.slice(0, Math.ceil(regularStates.length / 2)).map(({ state_code, description }) => (
              <div key={state_code} className="state-label-and-checkbox-container">
                <label>
                  <input
                    type="checkbox"
                    name={state_code}
                    value={state_code}
                    checked={selectedStates.includes(state_code)}
                    onChange={handleStateChange}
                    aria-label={description}
                  />
                  {description}
                </label>
              </div>
            ))}
          </div>
          <div className="states-column">
            {regularStates.slice(Math.ceil(regularStates.length / 2)).map(({ state_code, description }) => (
              <div key={state_code} className="state-label-and-checkbox-container">
                <label>
                  <input
                    type="checkbox"
                    name={state_code}
                    value={state_code}
                    checked={selectedStates.includes(state_code)}
                    onChange={handleStateChange}
                    aria-label={description}
                  />
                  {description}
                </label>
              </div>
            ))}
          </div>
          <div className="armed-forces-column">
            {armedForces.map(({ state_code, description }) => (
              <div key={state_code} className="state-label-and-checkbox-container">
                <label>
                  <input
                    type="checkbox"
                    name={state_code}
                    value={state_code}
                    checked={selectedStates.includes(state_code)}
                    onChange={handleStateChange}
                    aria-label={description}
                  />
                  {description}
                </label>
              </div>
            ))}
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default StatesCheckboxes;
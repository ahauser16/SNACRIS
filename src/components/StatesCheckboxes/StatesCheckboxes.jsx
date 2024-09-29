// src/components/StatesCheckboxes/StatesCheckboxes.jsx
import React from 'react';
import States from './States.json';
import './StatesCheckboxes.css';

const StatesCheckboxes = ({ selectedStates, handleStateChange }) => {
  const armedForcesStates = ['DC', 'AP', 'AE', 'AA'];
  const regularStates = States.filter(({ state_code }) => !armedForcesStates.includes(state_code));
  const armedForces = States.filter(({ state_code }) => armedForcesStates.includes(state_code));

  return (
    <fieldset className="states-checkboxes-container">
      <legend className="states-checkboxes-legend">States</legend>
      <div className="states-grid">
        <div className="states-column">
          {regularStates.slice(0, Math.ceil(regularStates.length / 2)).map(({ state_code, description }) => (
            <div key={state_code}>
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
            <div key={state_code}>
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
            <div key={state_code}>
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
  );
};

export default StatesCheckboxes;
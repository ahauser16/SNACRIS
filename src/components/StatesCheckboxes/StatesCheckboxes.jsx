// src/components/StatesCheckboxes/StatesCheckboxes.jsx
import React, { useState, useEffect } from "react";
import States from './mappedData/States.json';
import TimezoneClock from "./../CountriesCheckboxes/TimezoneClock/TimezoneClock";
import { sortingMethods } from "./utils/sortingMethods";
import { sortStates } from "./utils/sortStates";
import { filterStates } from "./utils/filterStates";
import {
  getFavorites,
  addFavoriteState,
  removeFavoriteState,
} from "../../LocalStorage/LocalStorage";
import './StatesCheckboxes.css';

const StatesCheckboxes = ({ selectedStates, handleStateChange }) => {
  const [sortMethod, setSortMethod] = useState(sortingMethods.ALPHABETICAL);
  const [filterQuery, setFilterQuery] = useState("");
  const [favoriteStates, setFavoriteStates] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await getFavorites();
        const myStates = favorites.categories.find(
          (cat) => cat.category_name === "My States"
        );
        if (myStates) {
          setFavoriteStates(myStates.items);
        }
      } catch (error) {
        console.error("Failed to fetch favorites:", error);
      }
    };
    fetchFavorites();
  }, []);

  const handleFavoriteToggle = async (stateCode) => {
    if (favoriteStates.some((state) => state.state_code === stateCode)) {
      await removeFavoriteState(stateCode);
      setFavoriteStates((prev) => prev.filter((state) => state.state_code !== stateCode));
    } else {
      await addFavoriteState(stateCode);
      const stateData = States.find((state) => state.state_code === stateCode);
      setFavoriteStates((prev) => [...prev, stateData]);
    }
  };

  const sortedStates = sortStates(States, sortMethod);
  const filteredStates = filterStates(sortedStates, filterQuery, sortMethod);

  const armedForcesStates = ['DC', 'AP', 'AE', 'AA'];
  const regularStates = States.filter(({ state_code }) => !armedForcesStates.includes(state_code));
  const armedForces = States.filter(({ state_code }) => armedForcesStates.includes(state_code));

  const renderFavoriteIcon = (stateCode) => {
    return favoriteStates.some((state) => state.state_code === stateCode) ? (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-check" onClick={() => handleFavoriteToggle(stateCode)}>
        <circle cx="12" cy="12" r="10" className="primary" />
        <path className="secondary" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-add-circle" onClick={() => handleFavoriteToggle(stateCode)}>
        <circle cx="12" cy="12" r="10" className="primary" />
        <path className="secondary" d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z" />
      </svg>
    );
  };

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
            {renderFavoriteIcon(state_code)}
          </div>
        ))}
      </fieldset>

      {/* Filtering Input */}
      <fieldset className="filtering-container">
        <legend>Filter States</legend>
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder={`Filter by ${sortMethod === sortingMethods.STATE_CODE
            ? "State Code"
            : "State Name"
            }`}
        />
      </fieldset>

      {/* Sorting Radio Buttons */}
      <fieldset className="sorting-method-container">
        <legend>Sort States By</legend>
        <label>
          <input
            type="radio"
            name="sortMethod"
            value={sortingMethods.ALPHABETICAL}
            checked={sortMethod === sortingMethods.ALPHABETICAL}
            onChange={() => setSortMethod(sortingMethods.ALPHABETICAL)}
          />
          Alphabetical
        </label>
        <label>
          <input
            type="radio"
            name="sortMethod"
            value={sortingMethods.STATE_CODE}
            checked={sortMethod === sortingMethods.STATE_CODE}
            onChange={() => setSortMethod(sortingMethods.STATE_CODE)}
          />
          State Code
        </label>
        <label>
          <input
            type="radio"
            name="sortMethod"
            value={sortingMethods.TIMEZONE}
            checked={sortMethod === sortingMethods.TIMEZONE}
            onChange={() => setSortMethod(sortingMethods.TIMEZONE)}
          />
          Timezone
        </label>
      </fieldset>

      {/* States Checkboxes */}
      <fieldset className="states-checkboxes-container">
        <legend className="states-checkboxes-legend">States</legend>
        <div className="states-grid">
          {sortMethod === sortingMethods.TIMEZONE ? (
            Object.keys(filteredStates).map((timezone) => (
              <div key={timezone}>
                <label className="timezone-label">{timezone}<TimezoneClock timezone={timezone} className="timestamp"/></label>
                {filteredStates[timezone].map(({ state_code, description }) => (
                  <div key={state_code} className="state-label-and-checkbox-container">
                    <label >
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
                    {renderFavoriteIcon(state_code)}
                  </div>
                ))}
              </div>
            ))
          ) : (
            filteredStates.map(({ state_code, description }) => (
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
                {renderFavoriteIcon(state_code)}
              </div>
            ))
          )}
        </div>
      </fieldset>
    </div>
  );
};

export default StatesCheckboxes;
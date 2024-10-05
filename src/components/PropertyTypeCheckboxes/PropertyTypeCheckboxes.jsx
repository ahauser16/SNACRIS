// src/components/PropertyTypeCheckboxes/PropertyTypeCheckboxes.jsx
import React, { useState, useEffect } from "react";
import PropertyTypeCodes from "./PropertyTypeCodes.json";
//TODO: create the utils functions and files below
import { sortingMethods } from "./utils/sortingMethods";
import { sortPropertyTypes } from "./utils/sortPropertyTypes";
import { filterPropertyTypes } from "./utils/filterPropertyTypes";
//refactor LocalStorage.js to inlcude the functions below and to save PropertyTypeCodes
import {
  getFavorites,
  addFavoritePropertyType,
  removeFavoritePropertyType,
} from "../../LocalStorage/LocalStorage";
import "./PropertyTypeCheckboxes.css";

const PropertyTypeCheckboxes = ({ selectedPropertyTypes, handlePropertyTypeChange }) => {
  const [sortMethod, setSortMethod] = useState(sortingMethods.ALPHABETICAL);
  const [filterQuery, setFilterQuery] = useState("");
  const [favoritePropertyTypes, setFavoritePropertyTypes] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await getFavorites();
        const myPropertyTypes = favorites.categories.find(
          (cat) => cat.category_name === "My Property Types"
        );
        if (myPropertyTypes) {
          setFavoritePropertyTypes(myPropertyTypes.items);
        }
      } catch (error) {
        console.error("Failed to fetch favorites:", error);
      }
    };
    fetchFavorites();
  }, []);

  const handleFavoriteToggle = async (propertyTypeCode) => {
    if (
      favoritePropertyTypes.some((propertyType) => propertyType.property_type === propertyTypeCode)
    ) {
      await removeFavoritePropertyType(propertyTypeCode);
      setFavoritePropertyTypes((prev) =>
        prev.filter((propertyType) => propertyType.property_type !== propertyTypeCode)
      );
    } else {
      await addFavoritePropertyType(propertyTypeCode);
      const propertyTypeData = PropertyTypeCodes.find(
        (propertyType) => propertyType.property_type === propertyTypeCode
      );
      setFavoritePropertyTypes((prev) => [...prev, propertyTypeData]);
    }
  };

  const sortedPropertyTypes = sortPropertyTypes(PropertyTypeCodes, sortMethod);
  const filteredPropertyTypes = filterPropertyTypes(sortedPropertyTypes, filterQuery, sortMethod);

  const renderFavoriteIcon = (propertyTypeCode) => {
    return favoritePropertyTypes.some((propertyType) => propertyType.property_type === propertyTypeCode) ? (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-check" onClick={() => handleFavoriteToggle(propertyTypeCode)}>
        <circle cx="12" cy="12" r="10" className="primary" />
        <path className="secondary" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-add-circle" onClick={() => handleFavoriteToggle(propertyTypeCode)}>
        <circle cx="12" cy="12" r="10" className="primary" />
        <path className="secondary" d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z" />
      </svg>
    );
  };

  return (
    <div className="property-type-component--container">
      {/* User Favorites section */}
      <fieldset className="favorites-container">
        <legend>My Favorite Property Types</legend>
        {favoritePropertyTypes.map(({ property_type, description }) => (
          <div key={property_type} className="property-type-label-and-checkbox-container">
            <label>
              <input
                type="checkbox"
                name={property_type}
                value={property_type}
                checked={selectedPropertyTypes.includes(property_type)}
                onChange={handlePropertyTypeChange}
                aria-label={description}
              />
              {description} ({property_type})
            </label>
            {renderFavoriteIcon(property_type)}
          </div>
        ))}
      </fieldset>

      {/* Filtering Input */}
      <fieldset className="filtering-container">
        <legend>Filter Property Types</legend>
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder={`Filter by ${sortMethod === sortingMethods.PROPERTY_TYPE_CODE
            ? "Property Type Code"
            : "Property Type Name"
            }`}
        />
      </fieldset>

      {/* Sorting Radio Buttons */}
      <fieldset className="sorting-method--container">
        <legend>Sort Property Types By</legend>
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
            value={sortingMethods.PROPERTY_TYPE_CODE}
            checked={sortMethod === sortingMethods.PROPERTY_TYPE_CODE}
            onChange={() => setSortMethod(sortingMethods.PROPERTY_TYPE_CODE)}
          />
          Property Type Code
        </label>
      </fieldset>

      {/* Property Types Checkboxes */}
      <fieldset className="property-type-checkboxes-container">
        <legend className="property-type-checkboxes-legend">Property Types</legend>
        <div className="property-type-grid">
          {filteredPropertyTypes.map(({ property_type, description }) => (
            <div key={property_type} className="property-type-label-and-checkbox-container">
              <label>
                <input
                  type="checkbox"
                  name={property_type}
                  value={property_type}
                  checked={selectedPropertyTypes.includes(property_type)}
                  onChange={handlePropertyTypeChange}
                  aria-label={description}
                />
                {description} ({property_type})
              </label>
              {renderFavoriteIcon(property_type)}
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default PropertyTypeCheckboxes;
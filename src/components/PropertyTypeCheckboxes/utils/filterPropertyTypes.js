// src/components/PropertyTypeCheckboxes/utils/filterPropertyTypes.js
import { sortingMethods } from "./sortingMethods";

export const filterPropertyTypes = (propertyTypes, query, sortMethod) => {
  if (!query) return propertyTypes;
  const lowerCaseQuery = query.toLowerCase();

  if (sortMethod === sortingMethods.PROPERTY_TYPE_CODE || sortMethod === sortingMethods.ALPHABETICAL) {
    return propertyTypes.filter(({ property_type, description }) =>
      property_type.toLowerCase().includes(lowerCaseQuery) ||
      description.toLowerCase().includes(lowerCaseQuery)
    );
  } else {
    return propertyTypes.filter(({ description }) =>
      description.toLowerCase().includes(lowerCaseQuery)
    );
  }
};
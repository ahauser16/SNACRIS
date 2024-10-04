// src/utils/sortPropertyTypes.js
import { sortingMethods } from "./sortingMethods";

export const sortPropertyTypes = (propertyTypes, method) => {
  switch (method) {
    case sortingMethods.PROPERTY_TYPE_CODE:
      return [...propertyTypes].sort((a, b) => a.property_type.localeCompare(b.property_type));
    case sortingMethods.ALPHABETICAL:
    default:
      return [...propertyTypes].sort((a, b) => a.description.localeCompare(b.description));
  }
};
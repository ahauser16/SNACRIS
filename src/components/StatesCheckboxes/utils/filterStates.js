import { sortingMethods } from "./sortingMethods";

export const filterStates = (states, query, sortMethod) => {
  if (!query) return states;
  const lowerCaseQuery = query.toLowerCase();

  if (sortMethod === sortingMethods.STATE_CODE || sortMethod === sortingMethods.ALPHABETICAL) {
    return states.filter(({ state_code, description }) =>
      state_code.toLowerCase().includes(lowerCaseQuery) ||
      description.toLowerCase().includes(lowerCaseQuery)
    );
  } else if (sortMethod === sortingMethods.TIMEZONE) {
    return Object.keys(states).reduce((acc, key) => {
      const filteredStates = states[key].filter(({ description }) =>
        description.toLowerCase().includes(lowerCaseQuery)
      );
      if (filteredStates.length) acc[key] = filteredStates;
      return acc;
    }, {});
  } else {
    return states.filter(({ description }) =>
      description.toLowerCase().includes(lowerCaseQuery)
    );
  }
};
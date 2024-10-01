// src/utils/sortStates.js
import { sortingMethods } from "./sortingMethods";
import { groupStatesByTimezone } from "./groupStates";

export const sortStates = (states, sortMethod) => {
  switch (sortMethod) {
    case sortingMethods.ALPHABETICAL:
      return states.sort((a, b) => a.description.localeCompare(b.description));
    case sortingMethods.STATE_CODE:
      return states.sort((a, b) => a.state_code.localeCompare(b.state_code));
    case sortingMethods.TIMEZONE:
      const groupedByTimezone = groupStatesByTimezone(states);
      Object.keys(groupedByTimezone).forEach((timezone) => {
        groupedByTimezone[timezone].sort((a, b) => a.description.localeCompare(b.description));
      });
      return groupedByTimezone;
    default:
      return states;
  }
};
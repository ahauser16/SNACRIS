import { statesMappedToTimezones } from "../mappedData/statesMappedToTimezones";

export const groupStatesByTimezone = (states) => {
    return states.reduce((acc, state) => {
        const timezones = statesMappedToTimezones[state.state_code] || [];
        timezones.forEach((timezone) => {
            if (!acc[timezone]) {
                acc[timezone] = [];
            }
            acc[timezone].push(state);
        });
        return acc;
    }, {});
};
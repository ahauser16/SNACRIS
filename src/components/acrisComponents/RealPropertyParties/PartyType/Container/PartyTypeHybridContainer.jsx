// src/components/DocTypeSearch/DateSelect/DateInputHybridContainer.jsx
import React from "react";
import PartyTypeSelectHybrid from "../InputComponents/PartyTypeSelectHybrid";
import PartyListByType from "../PartyListByType";
import Accordion from "../../../../Accordion/Accordion";

const PartyTypeHybridContainer = ({
    partyTypeFieldFS,
    partyTypeFieldES,
    handleInputChange,
    handleErrorDisplay
}) => {
    return (
        <fieldset className="drop-shadow">
            <legend>Party Type Search</legend>
            <PartyTypeSelectHybrid
                partyTypeFS={partyTypeFieldFS.partyTypeFS}
                partyTypeES={partyTypeFieldES.partyTypeES}
                handleInputChange={handleInputChange}
                handleErrorDisplay={handleErrorDisplay}
            />
            <Accordion title="What are party types?">
                <PartyListByType />
            </Accordion>
        </fieldset>
    );
};

export default PartyTypeHybridContainer;


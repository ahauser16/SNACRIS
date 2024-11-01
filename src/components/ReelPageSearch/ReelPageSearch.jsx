// src/components/ReelPageSearch/ReelPageSearch.jsx
import React, { useState } from 'react';
import InfoIcon from '../InfoIcon/InfoIcon';
import ReelPageInput from "./ReelPageInput/ReelPageInput";
import ReelNbrInput from "./ReelNbrInput/ReelNbrInput";
import ReelYearInput from "./ReelYearInput/ReelYearInput";
import RecordedBoroughSelect from "../AddressSearch/RecordedBoroughSelect/RecordedBoroughSelect";


const ReelPageSearch = ({
    reelPageSoql,
    handleInputChange,
    handleErrorDisplay,
    inputUserErrors,
}) => {

    const [isHovered, setIsHovered] = useState(false);

    const hoverMessage = 'Note: Reel & Page search only available for documents recorded or filed BEFORE January 2, 2003';

    return (
        <fieldset>
            <legend>
                <span>Search By Reel & Page</span>
                <InfoIcon
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                    hoverMessage={hoverMessage}
                />
            </legend>
            <div className="form-row form-row--mixed">
                <ReelPageInput
                    value={reelPageSoql.reel_pg}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.reel_pg}
                />

                <ReelNbrInput
                    value={reelPageSoql.reel_nbr}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.reel_nbr}
                />

                <ReelYearInput
                    value={reelPageSoql.reel_yr}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.reel_yr}
                />
                <RecordedBoroughSelect
                    value={reelPageSoql.recorded_borough}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.recorded_borough}
                />
            </div>
        </fieldset>
    );
};

export default ReelPageSearch;



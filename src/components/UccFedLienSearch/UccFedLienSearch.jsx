// src/components/DocTypeSearch/DocTypeSearch.jsx
import React, { useState } from "react";
import BoroughSelect from "../AddressSearch/BoroughSelect/BoroughSelect";
import FileNbrInput from "./FileNbrInput/FileNbrInput";

function DocTypeSearch({
    uccFedLienSoql,
    handleInputChange,
    handleErrorDisplay,
    inputUserErrors,
}) {


    return (
        <fieldset className="ucc-fed-lien-search--container">
            <legend className="ucc-fed-lien-search--legend">
                Search By File Number
            </legend>
            <div className="form-row form-row--mixed">
                <BoroughSelect
                    value={uccFedLienSoql.recorded_borough}
                    onChange={(e) =>
                        handleInputChange({
                            target: { name: "recorded_borough", value: e.target.value },
                        })
                    }
                    handleErrorDisplay={(name, errorMessage) =>
                        handleErrorDisplay("recorded_borough", errorMessage)
                    }
                    error={inputUserErrors.recorded_borough}
                />
                <FileNbrInput
                    value={uccFedLienSoql.file_nbr}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.file_nbr}
                />
            </div>
        </fieldset>
    );
}

export default DocTypeSearch;

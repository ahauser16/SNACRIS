import React, { useState } from "react";
import PartyNameSearchHybrid from "./PartyNameSearchHybrid";
import FormControls from "../FormControls/FormControls";
import { handleFormReset } from '../utils/handleFormReset';
import { handlePartyNameHybridFormSubmit } from '../utils/handlePartyNameHybridFormSubmit';
import ErrorMessageDisplay from '../ErrorMessageDisplay/ErrorMessageDisplay';
import handleErrorDisplay from '../utils/HandleErrorDisplay/HandleErrorDisplay';

const SearchByPartyNameHybridForm = ({
  setData,
  setError,
  handleTableReset,
  limit,
  offset,
}) => {
  const initialFormState = {
    nameFieldFS: {
      nameExactFS: "",
      nameContainsFS: "",
      nameBusinessFS: "",
      firstFS: "",
      lastFS: "",
      middleFS: "",
      namePartsFS: "",
      nameModifierFS: "business",
      exclusionFS: {
        searchTextFS: "",
        exclusionTextFS: ""
      },
      multipleSubstringsFS: {
        substring1FS: "",
        substring2FS: ""
      },
      inclusionExclusionFS: {
        inclusionTextFS: "",
        exclusionTextFS: ""
      },
      complexCompoundFS: {
        mainTextFS: "",
        compoundText1FS: "",
        compoundText2FS: ""
      },
      startsWithFS: "",
      endsWithFS: "",
      multipleExclusionFS: {
        searchTextFS: "",
        exclusionText1FS: "",
        exclusionText2FS: ""
      },
    },
    party_typeFS: "",
    document_dateFS: "",
    document_date_modifierFS: "rangeSelect",
    recorded_boroughFS: "",
    doc_typeFS: [],
  };

  const initialUserErrors = {
    nameFieldES: {
      nameExactES: null,
      nameContainsES: null,
      nameBusinessES: null,
      firstES: null,
      lastES: null,
      middleES: null,
      namePartsES: null,
      nameModifierES: null,
      exclusionES: {
        searchTextES: null,
        exclusionTextES: null
      },
      multipleSubstringsES: {
        substring1ES: null,
        substring2ES: null
      },
      inclusionExclusionES: {
        inclusionTextES: null,
        exclusionTextES: null
      },
      complexCompoundES: {
        mainTextES: null,
        compoundText1ES: null,
        compoundText2ES: null
      },
      startsWithES: null,
      endsWithES: null,
      multipleExclusionES: {
        searchTextES: null,
        exclusionText1ES: null,
        exclusionText2ES: null
      },
    },
    party_typeES: null,
    document_dateES: null,
    document_date_modifierES: null,
    recorded_boroughES: null,
    doc_typeES: null,
  };

  const [partyNameHybridSoql, setPartyNameHybridSoql] = useState(initialFormState);
  const [inputUserErrors, setInputUserErrors] = useState(initialUserErrors);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input change - ${name}: ${value}`);

    setPartyNameHybridSoql((prevSoql) => {
      const newSoql = { ...prevSoql };

      if (
        name === "first-name" ||
        name === "last-name" ||
        name === "middle-name"
      ) {
        newSoql.nameFieldFS[name.split("-")[0] + "FS"] = value;
        newSoql.nameFieldFS.namePartsFS = `${newSoql.nameFieldFS.firstFS} ${newSoql.nameFieldFS.middleFS} ${newSoql.nameFieldFS.lastFS}`.trim();
      } else if (name.includes(".")) {
        const [parent, child] = name.split(".");
        newSoql.nameFieldFS[parent + "FS"][child + "FS"] = value;
      } else {
        newSoql.nameFieldFS[name + "FS"] = value;
      }

      return newSoql;
    });
  };

  const handleModifierChange = (field, value) => {
    console.log(`Modifier input change - ${field}: ${value}`);
    setPartyNameHybridSoql((prevSoql) => ({
      ...prevSoql,
      nameFieldFS: {
        ...prevSoql.nameFieldFS,
        [field + "FS"]: value,
      },
    }));
  };

  const resetForm = handleFormReset(setPartyNameHybridSoql, initialFormState, setInputUserErrors, initialUserErrors, setErrorMessages, handleTableReset);

  return (
    <form
      className="custom-form--container"
      onSubmit={(e) => handlePartyNameHybridFormSubmit(e, partyNameHybridSoql, setInputUserErrors, setErrorMessages, setData, setError, limit, offset, handleErrorDisplay)}
    >
      <PartyNameSearchHybrid
        partyNameHybridSoql={partyNameHybridSoql}
        handleInputChange={handleInputChange}
        handleErrorDisplay={(fieldName, errorMessage) => handleErrorDisplay(fieldName, errorMessage, setInputUserErrors)}
        inputUserErrors={inputUserErrors}
        handleModifierChange={handleModifierChange}
      />
      <FormControls handleFormReset={resetForm} />
      <ErrorMessageDisplay errorMessages={errorMessages} />
    </form>
  );
};

export default SearchByPartyNameHybridForm;
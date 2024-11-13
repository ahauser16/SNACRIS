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
      namePartsFS: {
        firstFS: "",
        lastFS: "",
        middleFS: "",
        fullNameFS: "",
      },
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
    documentDateFieldFS: {
      documentDateFS: "",
      documentDateModifierFS: "dateRangeSelect", // Default value,
      dateRangeSelectFS: {
        startDateFS: "",
        endDateFS: "",
      },
      exactDateFS: "",
      dateRangeCustomFS: {
        startDateFS: "",
        endDateFS: "",
      },
    },
    partyTypeFS: "",
    recordedBoroughFS: "",
    docTypeFS: [],
  };

  const initialUserErrors = {
    nameFieldES: {
      nameExactES: null,
      nameContainsES: null,
      nameBusinessES: null,
      namePartsES: {
        firstES: null,
        lastES: null,
        middleES: null,
        fullNameES: null,
      },
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
    documentDateFieldES: {
      documentDateES: null,
      documentDateModifierES: null,
      dateRangeSelectES: {
        startDateES: null,
        endDateES: null,
      },
      exactDateES: null,
      dateRangeCustomES: {
        startDateES: null,
        endDateES: null,
      },
    },
    partyTypeES: null,
    recordedBoroughES: null,
    docTypeES: null,
  };

  const [partyNameHybridFormDataState, setPartyNameHybridFormDataState] = useState(initialFormState);
  const [inputUserErrors, setInputUserErrors] = useState(initialUserErrors);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input change - ${name}: ${value}`);

    setPartyNameHybridFormDataState((prevSoql) => {
      const newSoql = { ...prevSoql };

      if (name === "first-name" || name === "last-name" || name === "middle-name") {
        newSoql.nameFieldFS[name.split("-")[0] + "FS"] = value;
        newSoql.nameFieldFS.namePartsFS = `${newSoql.nameFieldFS.firstFS} ${newSoql.nameFieldFS.middleFS} ${newSoql.nameFieldFS.lastFS}`.trim();
      } else if (name.includes(".")) {
        const [parent, child] = name.split(".");
        newSoql.nameFieldFS[parent + "FS"][child + "FS"] = value;
      } else if (name === "document_date") {
        const [startDate, endDate] = value.split(" - ");
        newSoql.documentDateFieldFS.dateRangeSelectFS.startDateFS = startDate;
        newSoql.documentDateFieldFS.dateRangeSelectFS.endDateFS = endDate;
      } else {
        newSoql.nameFieldFS[name + "FS"] = value;
      }

      return newSoql;
    });
  };

  const handleModifierChange = (field, value) => {
    console.log(`Modifier input change - ${field}: ${value}`);
    setPartyNameHybridFormDataState((prevSoql) => {
      if (field === "nameModifierFS") {
        return {
          ...prevSoql,
          nameFieldFS: {
            ...prevSoql.nameFieldFS,
            [field]: value,
          },
        };
      } else if (field === "documentDateModifierFS") {
        return {
          ...prevSoql,
          documentDateFieldFS: {
            ...prevSoql.documentDateFieldFS,
            [field]: value,
          },
        };
      }
      return prevSoql;
    });
  };

  const resetForm = handleFormReset(setPartyNameHybridFormDataState, initialFormState, setInputUserErrors, initialUserErrors, setErrorMessages, handleTableReset);

  return (
    <form
      className="custom-form--container"
      onSubmit={(e) => handlePartyNameHybridFormSubmit(e, partyNameHybridFormDataState, setInputUserErrors, setErrorMessages, setData, setError, limit, offset, handleErrorDisplay)}
    >
      <PartyNameSearchHybrid
        partyNameHybridFormDataState={partyNameHybridFormDataState}
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
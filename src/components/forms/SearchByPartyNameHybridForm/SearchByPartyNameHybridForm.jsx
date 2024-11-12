// src/components/SearchByPartyNameHybridForm/SearchByPartyNameHybridForm.jsx
import React, { useState } from "react";
import PartyNameSearchHybrid from "./PartyNameSearchHybrid";
import FormControls from "../FormControls/FormControls";
import { handleFormReset } from '../utils/handleFormReset';
import { handlePartyNameHybridFormSubmit } from '../utils/handlePartyNameHybridFormSubmit';
import ErrorMessageDisplay from '../ErrorMessageDisplay/ErrorMessageDisplay';

const SearchByPartyNameHybridForm = ({
  setData,
  setError,
  handleTableReset,
  limit,
  offset,
}) => {
  const initialFormState = {
    nameField: {
      nameExact: "",
      nameContains: "",
      nameBusiness: "",
      first: "",
      last: "",
      middle: "",
      nameParts: "",
      nameModifier: "business",
      exclusion: {
        searchText: "",
        exclusionText: ""
      },
      multipleSubstrings: {
        substring1: "",
        substring2: ""
      },
      combinedInclusionExclusion: {
        inclusionText: "",
        exclusionText: ""
      },
      complexCompound: {
        mainText: "",
        compoundText1: "",
        compoundText2: ""
      },
      startsWith: "",
      endsWith: "",
      multipleExclusion: {
        searchText: "",
        exclusionText1: "",
        exclusionText2: ""
      },
    },
    party_type: "",
    document_date: "",
    document_date_modifier: "rangeSelect",
    recorded_borough: "",
    doc_type: [],
  };

  const initialUserErrors = {
    nameField: {
      nameExact: null,
      nameContains: null,
      nameBusiness: null,
      first: null,
      last: null,
      middle: null,
      nameParts: null,
      nameModifier: null,
      exclusion: {
        searchText: null,
        exclusionText: null
      },
      multipleSubstrings: {
        substring1: null,
        substring2: null
      },
      combinedInclusionExclusion: {
        inclusionText: null,
        exclusionText: null
      },
      complexCompound: {
        mainText: null,
        compoundText1: null,
        compoundText2: null
      },
      startsWith: null,
      endsWith: null,
      multipleExclusion: {
        searchText: null,
        exclusionText1: null,
        exclusionText2: null
      },
    },
    party_type: null,
    document_date: null,
    document_date_modifier: null,
    recorded_borough: null,
    doc_type: null,
  };

  const [partyNameHybridSoql, setPartyNameHybridSoql] = useState(initialFormState);
  const [inputUserErrors, setInputUserErrors] = useState(initialUserErrors);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleErrorDisplay = (fieldName, errorMessage) => {
    console.log(`Error in ${fieldName}: ${errorMessage}`);
    setInputUserErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (fieldName.startsWith("nameField.")) {
        const part = fieldName.split(".")[1];
        newErrors.nameField = {
          ...newErrors.nameField,
          [part]: errorMessage,
        };
      } else {
        newErrors[fieldName] = errorMessage;
      }

      const className = fieldName.startsWith("nameField")
        ? `.form-group--${fieldName.replace(".", "-")}`
        : `.form-group--${fieldName}`;

      const formGroupElement = document.querySelector(className);
      if (formGroupElement) {
        formGroupElement.classList.toggle("field-error", !!errorMessage);
      }

      return newErrors;
    });
  };

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
        newSoql.nameField[name.split("-")[0]] = value;
        newSoql.nameField.nameParts = `${newSoql.nameField.first} ${newSoql.nameField.middle} ${newSoql.nameField.last}`.trim();
      } else if (name.includes(".")) {
        const [parent, child] = name.split(".");
        newSoql.nameField[parent][child] = value;
      } else {
        newSoql.nameField[name] = value;
      }

      return newSoql;
    });
  };

  // Updated handleModifierChange to handle both nameModifier and document_date_modifier
  const handleModifierChange = (field, value) => {
    console.log(`Modifier input change - ${field}: ${value}`);
    setPartyNameHybridSoql((prevSoql) => ({
      ...prevSoql,
      nameField: {
        ...prevSoql.nameField,
        [field]: value,
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
        handleErrorDisplay={handleErrorDisplay}
        inputUserErrors={inputUserErrors}
        handleModifierChange={handleModifierChange}
      />
      <FormControls handleFormReset={resetForm} />
      <ErrorMessageDisplay errorMessages={errorMessages} />
    </form>
  );
};

export default SearchByPartyNameHybridForm;
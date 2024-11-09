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
    name: "",
    nameParts: {
      first: "",
      last: "",
      middle: "",
    },
    name_modifier: "contains",
    party_type: "",
    document_date: "",
    document_date_modifier: "rangeSelect",
    recorded_borough: "",
    doc_type: [],
  };

  const initialUserErrors = {
    name: null,
    nameParts: {
      first: null,
      last: null,
      middle: null,
    },
    name_modifier: null,
    party_type: null,
    document_date: null,
    document_date_modifier: null,
    recorded_borough: null,
    doc_type: null,
  };

  const [partyNameHybridSoql, setpartyNameHybridSoql] = useState(initialFormState);
  const [inputUserErrors, setInputUserErrors] = useState(initialUserErrors);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleErrorDisplay = (fieldName, errorMessage) => {
    console.log(`Error in ${fieldName}: ${errorMessage}`);
    setInputUserErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (fieldName.startsWith("nameParts.")) {
        const part = fieldName.split(".")[1];
        newErrors.nameParts = {
          ...newErrors.nameParts,
          [part]: errorMessage,
        };
      } else {
        newErrors[fieldName] = errorMessage;
      }

      const className = fieldName.startsWith("nameParts")
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

    setpartyNameHybridSoql((prevSoql) => {
      const newSoql = { ...prevSoql };

      if (
        name === "first-name" ||
        name === "last-name" ||
        name === "middle-name"
      ) {
        newSoql.nameParts[name.split("-")[0]] = value;
      } else {
        newSoql[name] = value;
      }

      // return uppercaseSoql(newSoql);
      return newSoql;
    });
  };

  // Updated handleModifierChange to handle both name_modifier and document_date_modifier
  const handleModifierChange = (field, value) => {
    console.log(`Modifier input change - ${field}: ${value}`);
    setpartyNameHybridSoql((prevSoql) => ({
      ...prevSoql,
      [field]: value,
    }));
  };

  const resetForm = handleFormReset(setpartyNameHybridSoql, initialFormState, setInputUserErrors, initialUserErrors, setErrorMessages, handleTableReset);

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
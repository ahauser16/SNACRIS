// src/components/forms/utils/handleFormReset.js

export const handleFormReset = (setFormState, initialFormState, setInputUserErrors, initialUserErrors, setErrorMessages, handleTableReset) => {
    return () => {
      setFormState(initialFormState);
      setInputUserErrors(initialUserErrors);
      setErrorMessages([]);
      handleTableReset();
    };
  };
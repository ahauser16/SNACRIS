// src/components/utils/handleErrorsDuringSubmit.js
export const handleErrorsDuringSubmission = (inputUserErrors, setErrorMessages) => {
    const errors = Object.values(inputUserErrors).filter(error => error !== null);
    if (errors.length > 0) {
      setErrorMessages(errors);
      console.log('Form submission errors:', errors);
      return true; // Indicate that there are errors
    }
    return false; // Indicate that there are no errors
  };
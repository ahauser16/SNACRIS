const handleErrorDisplay = (fieldName, errorMessage, setInputUserErrors) => {
  console.log(`Error in ${fieldName}: ${errorMessage}`);
  setInputUserErrors((prevErrors) => {
    const newErrors = { ...prevErrors };

    if (fieldName.startsWith("nameFieldES.")) {
      const parts = fieldName.split(".");
      if (parts.length === 3) {
        const [_, parent, child] = parts;
        newErrors.nameFieldES = {
          ...newErrors.nameFieldES,
          [parent]: {
            ...newErrors.nameFieldES[parent],
            [child]: errorMessage,
          },
        };
      } else {
        const part = parts[1];
        newErrors.nameFieldES = {
          ...newErrors.nameFieldES,
          [part]: errorMessage,
        };
      }
    } else {
      newErrors[fieldName] = errorMessage;
    }

    const className = fieldName.startsWith("nameFieldES")
      ? `.form-group--${fieldName.replace(".", "-")}`
      : `.form-group--${fieldName}`;

    const formGroupElement = document.querySelector(className);
    if (formGroupElement) {
      formGroupElement.classList.toggle("field-error", !!errorMessage);
    }

    return newErrors;
  });
};

export default handleErrorDisplay;
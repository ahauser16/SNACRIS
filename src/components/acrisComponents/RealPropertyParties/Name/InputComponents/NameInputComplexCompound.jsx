// src/components/NameInput/NameInput_Contains.jsx
import React, { useState } from "react";
import InfoIcon from '../../../../InfoIcon/InfoIcon';

const NameInputComplexCompound = ({
  mainTextFS,
  mainTextES,
  compoundText1FS,
  compoundText1ES,
  compoundText2FS,
  compoundText2ES,
  handleInputChange,
  handleErrorDisplay,
}) => {
  const [isHoveredMainText, setIsHoveredMainText] = useState(false);
  const [isHoveredCompoundText1, setIsHoveredCompoundText1] = useState(false);
  const [isHoveredCompoundText2, setIsHoveredCompoundText2] = useState(false);

  const validateName = (name, value) => {
    if (value.length > 70) {
      handleErrorDisplay(name, "Text must be 70 characters or less.");
    } else if (!value) {
      handleErrorDisplay(name, "This field is required for form submission");
    } else {
      handleErrorDisplay(name, null);
    }
  };

  const handleValidationPlusDataTransferToSoql = (e) => {
    const { name, value } = e.target;
    validateName(name, value);
    handleInputChange(e);
  };

  return (
    <>
      <div className="form-row form-row--mixed">
        <div
          className={`form-group form-group--width-auto form-group--name-complexCompound ${mainTextES ? "field-error" : ""}`}
          style={{ '--field-width': '25ch' }}
        >
          <label htmlFor="name-main-search-text">
            <span>Main Search Text</span>
            <InfoIcon
              isHovered={isHoveredMainText}
              setIsHovered={setIsHoveredMainText}
              hoverMessage="Main Search Text must be 70 characters or less and is required for form submission."
            />
          </label>
          <input
            type="text"
            id="name-main-search-text"
            name="complexCompound.mainText"
            value={mainTextFS}
            onChange={handleValidationPlusDataTransferToSoql}
            className="form-field"
            aria-describedby="name-main-search-text-description"
            placeholder="Enter main search text"
            maxLength="70"
            aria-required="true"
            required
          />
          <span
            className="field-description" id="name-main-search-text-description"
          >
            {mainTextES}
          </span>
        </div>
        <div
          className={`form-group form-group--width-auto form-group--name-complexCompound ${compoundText1ES ? "field-error" : ""}`}
          style={{ '--field-width': '25ch' }}
        >
          <label htmlFor="name-compound-one-search-text">
            <span>Compound Search Text 1</span>
            <InfoIcon
              isHovered={isHoveredCompoundText1}
              setIsHovered={setIsHoveredCompoundText1}
              hoverMessage="Compound Search Text 1 must be 70 characters or less and is required for form submission."
            />
          </label>
          <input
            type="text"
            id="name-compound-one-search-text"
            name="complexCompound.compoundText1"
            value={compoundText1FS}
            onChange={handleValidationPlusDataTransferToSoql}
            className="form-field"
            aria-describedby="name-compound-one-search-text-description"
            placeholder="Enter 1st compound search text"
            maxLength="70"
            aria-required="true"
            required
          />
          <span className="field-description" id="name-compound-one-search-text-description">
            {compoundText1ES}
          </span>
        </div>
        <div
          className={`form-group form-group--width-auto form-group--name-complexCompound ${compoundText2ES ? "field-error" : ""}`}
          style={{ '--field-width': '25ch' }}
        >
          <label htmlFor="name-compound-two-search-text">
            <span>Compound Search Text 2</span>
            <InfoIcon
              isHovered={isHoveredCompoundText2}
              setIsHovered={setIsHoveredCompoundText2}
              hoverMessage="Compound Search Text 2 must be 70 characters or less and is required for form submission."
            />
          </label>
          <input
            type="text"
            id="name-compound-two-search-text"
            name="complexCompound.compoundText2"
            value={compoundText2FS}
            onChange={handleValidationPlusDataTransferToSoql}
            className="form-field"
            aria-describedby="name-compound-two-search-text-description"
            placeholder="Enter 2nd compound search text"
            maxLength="70"
            aria-required="true"
            required
          />
          <span className="field-description" id="name-compound-two-search-text-description">
            {compoundText2ES}
          </span>
        </div>
      </div>
    </>
  );
};

export default NameInputComplexCompound;

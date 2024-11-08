import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { CountryCode } from './AcrisCountryCodes';
import './AcrisCountryCodesCheckbox.css'; // Assuming you have a CSS file for styles

// Define the props for the component
interface AcrisCountryCodesCheckboxProps {
  countryCodes: CountryCode[];
  onChange?: (countryCode: string, checked: boolean) => void;
}

// Functional component definition
const AcrisCountryCodesCheckbox: React.FC<AcrisCountryCodesCheckboxProps> = ({ countryCodes, onChange }) => {
  const handleChange = (countryCode: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(countryCode, event.target.checked);
    }
  };

  return (
    <>
      {countryCodes.map((country) => {
        const inputId = `checkbox-${country.country_code}`;
        return (
          <div key={country.country_code} className="country-code-checkbox-container">
            <label htmlFor={inputId} className="country-code-checkbox-label">
              <input
                type="checkbox"
                id={inputId}
                className="country-code-checkbox-input"
                value={country.country_code}
                onChange={handleChange(country.country_code)}
                aria-labelledby={`label-${country.country_code}`}
              />
              <span id={`label-${country.country_code}`}>{country.description}</span>
            </label>
          </div>
        );
      })}
    </>
  );
};

// Default props
AcrisCountryCodesCheckbox.defaultProps = {
  onChange: () => {},
};

// Prop types
AcrisCountryCodesCheckbox.propTypes = {
  countryCodes: PropTypes.arrayOf(
    PropTypes.shape({
      record_type: PropTypes.string.isRequired,
      country_code: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

// Memoize the component to prevent unnecessary re-renders
export default memo(AcrisCountryCodesCheckbox);
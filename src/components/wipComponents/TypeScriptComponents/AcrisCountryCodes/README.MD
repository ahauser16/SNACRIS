# Development Notes

## Step-by-Step Explanation

1. **Import React and necessary types**: We need to import React and the `CountryCode` interface from the `AcrisCountryCodes.ts` file.
2. **Define the component**: Create a functional component named `AcrisCountryCodesCheckbox`.
3. **Map over the dataset**: Use the `COUNTRY_CODES` array to generate the required HTML elements.
4. **Render the elements**: Return the JSX that includes a `div` container with the checkboxes and labels.

## Code

Create a new file named AcrisCountryCodesCheckbox.ts and add the following code:

```javascript
import React from 'react';
import { CountryCode, COUNTRY_CODES } from './AcrisCountryCodes';
//Import React to use JSX and create the component.
//Import the `CountryCode` interface and `COUNTRY_CODES` dataset from the `AcrisCountryCodes.ts` file.

// Define an interface for the component props to ensure type safety. The component expects a `countryCodes` prop, which is an array of `CountryCode` objects.
interface AcrisCountryCodesCheckboxProps {
  countryCodes: CountryCode[];
}

// Define the functional component using the `React.FC type`, which provides type checking and autocomplete for props.
const AcrisCountryCodesCheckbox: React.FC<AcrisCountryCodesCheckboxProps> = ({
  countryCodes,
}) => {
  return (
    //-->Use the `map` function to iterate over the countryCodes array.
    <>
      {countryCodes.map((country) => {
        //--> For each country, generate a unique inputId using the country_code.
        const inputId = `checkbox-${country.country_code}`;
        return (
          //--> Render a `div` with the class name `country-code-checkbox-container` for each country.
          <div
            key={country.country_code}
            className="country-code-checkbox-container"
          >
            //--> Inside the div, render a label element with the htmlFor
            attribute set to the inputId.
            <label htmlFor={inputId} className="country-code-checkbox-label">
              //--> Render an input element of type checkbox with the id
              attribute set to the inputId and the class name
              country-code-checkbox-input.
              <input
                type="checkbox"
                id={inputId}
                className="country-code-checkbox-input"
                value={country.country_code}
              />
              //-->Display the description of the country next to the checkbox.
              {country.description}
            </label>
          </div>
        );
      })}
    </>
  );
};

// Export the component as the default export so it can be imported and used in other parts of the application.
export default AcrisCountryCodesCheckbox;
```

## Usage

To use this component in your application, you can import it and pass the `COUNTRY_CODES` dataset as a prop:

```javascript
import React from 'react';
import AcrisCountryCodesCheckbox from './AcrisCountryCodesCheckbox';
import { COUNTRY_CODES } from './AcrisCountryCodes';

const App: React.FC = () => {
  return (
    <div>
      <h1>Country Codes</h1>
      <AcrisCountryCodesCheckbox countryCodes={COUNTRY_CODES} />
    </div>
  );
};

export default App;
```

## Planned Improvements

**1. Prop Types and Default Props**: Define prop types and default props to ensure the component behaves correctly even if some props are not provided.

**2. Memoization**: Use React.memo to prevent unnecessary re-renders.

`React.memo` is a higher-order component that optimizes functional components by memoizing their output. This means that the component will only re-render if its props change, preventing unnecessary re-renders and improving performance.

In the context of the `AcrisCountryCodesCheckbox` component, `React.memo` is used to wrap the component, ensuring that it only re-renders when the `countryCodes` or `onChange` props change. Here's how it works:

   - **Component Definition**: The `AcrisCountryCodesCheckbox` component is defined as a functional component.
   - **Memoization**: The component is wrapped with `React.memo` before being exported.

**How React.memo Works**
   - **Initial Render**: When the `AcrisCountryCodesCheckbox` component is rendered for the first time, React will render it as usual.
   - **Subsequent Renders**: On subsequent renders, React will compare the new props with the previous props. If the props have not changed, React will skip rendering the component and reuse the previous output.
   - **Props Change**: If the `countryCodes` or `onChange` props change, React will re-render the component with the new props.

**Benefits**
   - **Performance Optimization**: By preventing unnecessary re-renders, `React.memo` can significantly improve the performance of your application, especially for components that are frequently re-rendered with the same props.
   - **Simplified Code**: Using `React.memo` is a simple and effective way to optimize functional components without adding complex logic.


**3. Accessibility**: Ensure the component is accessible by adding ARIA attributes.

**4. Styling**: Use CSS-in-JS or a CSS preprocessor for better maintainability and scalability.

**5. Error Handling**: Add error boundaries to catch and handle errors gracefully.

**6. Testing**: Write comprehensive unit tests using a testing library like Jest and React Testing Library.

**7. Documentation**: Add JSDoc comments for better code documentation.

### Improved version with improvements:

```javascript
// src/components/TypeScriptComponents/AcrisCountryCodes.ts/AcrisCountryCodesCheckbox.tsx
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
```

### Additional Improvements:

**1. CSS-in-JS**: Consider using a library like `styled-components` or `emotion` for styling.
**2. Error Boundaries**: Create an error boundary component to catch and handle errors in the component tree.
**3. Unit Tests**: Write unit tests to ensure the component works as expected.

### Example Unit Test:

```javascript
// src/components/TypeScriptComponents/AcrisCountryCodes.ts/AcrisCountryCodesCheckbox.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AcrisCountryCodesCheckbox from './AcrisCountryCodesCheckbox';
import { COUNTRY_CODES } from './AcrisCountryCodes';

test('renders country codes checkboxes', () => {
  render(<AcrisCountryCodesCheckbox countryCodes={COUNTRY_CODES} />);
  COUNTRY_CODES.forEach((country) => {
    expect(screen.getByLabelText(country.description)).toBeInTheDocument();
  });
});

test('calls onChange when a checkbox is clicked', () => {
  const handleChange = jest.fn();
  render(<AcrisCountryCodesCheckbox countryCodes={COUNTRY_CODES} onChange={handleChange} />);
  const checkbox = screen.getByLabelText(COUNTRY_CODES[0].description);
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledWith(COUNTRY_CODES[0].country_code, true);
});
```
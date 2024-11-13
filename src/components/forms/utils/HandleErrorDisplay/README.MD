## Explanation of `handleErrorDisplay` Function and State Management

The `handleErrorDisplay` function, `[inputUserErrors, setInputUserErrors]`, and `[errorMessages, setErrorMessages]` work together to manage and display error messages in the `SearchByPartyNameHybridForm` form-component. Here's a detailed explanation of how they work in the context of the `SearchByPartyNameHybridForm` form-component, the `NameInputBusiness` component, and the sequence of how the values are passed from component to component when executed.

### `handleErrorDisplay` Function

The `handleErrorDisplay` function is responsible for updating the error state for form fields. It takes three parameters:

1. `fieldName`: The name of the field that has an error.
2. `errorMessage`: The error message to be displayed.
3. `setInputUserErrors`: The state setter function for updating the `inputUserErrors` state.

### Here's how the function works internally:

1. **Log the Error**: It logs the error message to the console for debugging purposes.
2. **Update the Error State**: It updates the `inputUserErrors` state with the new error message.
   - It creates a copy of the previous error state (`prevErrors`).
   - If the `fieldName` starts with `"nameField."`, it extracts the specific part of the `nameField` object that needs to be updated.
   - It updates the specific part of the `nameField` object with the new error message.
   - If the `fieldName` does not start with `"nameField."`, it updates the corresponding field directly.
3. **Toggle the Error Class**: It toggles the `"field-error"` class on the form group element associated with the field to visually indicate the error.
   - It constructs the class name based on the `fieldName`.
   - It selects the form group element using `document.querySelector`.
   - It toggles the `"field-error"` class based on whether there is an error message.

### State Management

The `SearchByPartyNameHybridForm` component uses two pieces of state to manage errors:

1. `[inputUserErrors, setInputUserErrors]`: This state holds the error messages for individual form fields.
2. `[errorMessages, setErrorMessages]`: This state holds a list of error messages to be displayed in the `ErrorMessageDisplay` component.

### Sequence of Execution

1. **User Input**: When the user interacts with a form field (e.g., `NameInputBusiness`), the `handleValidationPlusDataTransferToSoql` function is called.
2. **Validation**: The `validateName` function validates the input value. If there is an error, it calls the `handleErrorDisplay` function with the appropriate `fieldName` and `errorMessage`.
3. **Update Error State**: The `handleErrorDisplay` function updates the `inputUserErrors` state with the new error message and toggles the `"field-error"` class on the form group element.
4. **Display Error**: The error message is displayed next to the form field, and the form group element is visually highlighted to indicate the error.

### Example: `NameInputBusiness` Component

Here's how the `NameInputBusiness` component uses the `handleErrorDisplay` function:

1. **User Input**: The user enters a value in the `Business Name` input field.
2. **Validation**: The `handleValidationPlusDataTransferToSoql` function is called, which in turn calls the `validateName` function.
3. **Error Handling**: If the input value is invalid, the `validateName` function calls the `handleErrorDisplay` function with the `fieldName` set to `"nameField.nameBusiness"` and an appropriate `errorMessage`.
4. **Update Error State**: The `handleErrorDisplay` function updates the `inputUserErrors` state and toggles the `"field-error"` class on the form group element.
5. **Display Error**: The error message is displayed next to the `Business Name` input field, and the form group element is visually highlighted to indicate the error.

## Explanation of `handleErrorDisplay` and `inputUserErrors` Propagation

The `handleErrorDisplay` function and the `inputUserErrors` state are passed through multiple components from the `SearchByPartyNameHybridForm` component down to the `NameInputBusiness` component. Here's a detailed explanation of how they are passed and used in each component.

### `SearchByPartyNameHybridForm` Component

1. **State Initialization**: The `SearchByPartyNameHybridForm` component initializes the `inputUserErrors` state using `useState`.

```javascript
const [inputUserErrors, setInputUserErrors] = useState(initialUserErrors);
```

2. **Passing Props**: The `handleErrorDisplay` function and the `inputUserErrors` state are passed as props to the `PartyNameSearchHybrid` component.

```javascript
<PartyNameSearchHybrid
  partyNameHybridFormState={partyNameHybridFormState}
  handleInputChange={handleInputChange}
  handleErrorDisplay={(fieldName, errorMessage) =>
    handleErrorDisplay(fieldName, errorMessage, setInputUserErrors)
  }
  inputUserErrors={inputUserErrors}
  handleModifierChange={handleModifierChange}
/>
```

### `PartyNameSearchHybrid` Component

1. **Receiving Props**: The `PartyNameSearchHybrid` component receives the `handleErrorDisplay` function and the `inputUserErrors` state as props.

```javascript
const PartyNameSearchHybrid = ({
  partyNameHybridFormState,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
  handleModifierChange,
}) => {
```

2. **Passing Props**: The `handleErrorDisplay` function and the `inputUserErrors` state are passed as props to the `NameInputHybridContainer` component.

```javascript
<NameInputHybridContainer
  nameField={partyNameHybridFormState.nameField}
  handleInputChange={handleInputChange}
  handleErrorDisplay={handleErrorDisplay}
  inputUserErrors={inputUserErrors.nameField}
  handleModifierChange={handleModifierChange}
/>
```

### `NameInputHybridContainer` Component

1. **Receiving Props**: The `NameInputHybridContainer` component receives the `handleErrorDisplay` function and the `inputUserErrors` state as props.

```javascript
const NameInputHybridContainer = ({
  nameField,
  handleInputChange,
  handleErrorDisplay,
  inputUserErrors,
  handleModifierChange,
}) => {
```

2. **Passing Props**: The `handleErrorDisplay` function and the `inputUserErrors` state are passed as props to the `NameInputHybrid` component.

```javascript
<NameInputHybrid
  nameField={nameField}
  handleErrorDisplay={handleErrorDisplay}
  onChange={handleInputChange}
  error={inputUserErrors}
/>
```

### `NameInputHybrid` Component

1. **Receiving Props**: The `NameInputHybrid` component receives the `handleErrorDisplay` function and the `inputUserErrors` state as props.

```javascript
const NameInputHybrid = ({
  nameField,
  onChange,
  handleErrorDisplay,
  error,
}) => {
```

2. **Passing Props**: The `handleErrorDisplay` function and the `inputUserErrors` state are passed as props to the `NameInputBusiness` component (and other similar components).

```javascript
{
  nameModifier === 'business' && (
    <NameInputBusiness
      name={nameBusiness}
      onChange={onChange}
      handleErrorDisplay={handleErrorDisplay}
      error={error.nameBusiness}
    />
  );
}
```

### `NameInputBusiness` Component

1. **Receiving Props**: The `NameInputBusiness` component receives the `handleErrorDisplay` function and the `error` state as props.

```javascript
const NameInputBusiness = ({ name, onChange, handleErrorDisplay, error }) => {
```

2. **Using handleErrorDisplay**: The `handleErrorDisplay` function is called within the `validateName` function to update the error state.

```javascript
const validateName = (value) => {
  if (value.length > 70) {
    handleErrorDisplay(
      'nameField.nameBusiness',
      'Name must be 70 characters or less.'
    );
  } else if (!value) {
    handleErrorDisplay(
      'nameField.nameBusiness',
      'This field is required for form submission'
    );
  } else {
    handleErrorDisplay('nameField.nameBusiness', null);
  }
};
```

3. **Displaying Error**: The `error` prop is used to display the error message next to the input field.

```javascript
<span className="field-description" id="name-business-description">
  {error}
</span>
```

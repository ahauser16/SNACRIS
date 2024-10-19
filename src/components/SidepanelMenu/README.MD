# Notes

##  `SidepanelMenu` maintains the state for each form and its corresponding table

### 1. Store the state for each form and table in the SidepanelMenu component.

The `formStates` state variable in `SidepanelMenu` will store the state for each form and its corresponding table. This state will include the data and error for each form.

### 2. Pass the state and state update functions down to the FormTableContainer component.

The relevant state and state update functions will be passed to the `FormTableContainer` component so that it can manage the data and error states for the active form.
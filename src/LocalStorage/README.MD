# LocalStorage.js

## Notes

### Refactor adding "Base Level Values"

Example Usage

To add a base level value for the `doc__type` field in the `DOCUMENT_CONTROL` dataset:

```javascript
addBaseLevelValue('DOCUMENT_CONTROL', 'doc__type', 'AGMT')
  .then(() => console.log('Value added successfully'))
  .catch((error) => console.error(error.message));
```

To add a base level value for the `doc__type_description` field in the `DOCUMENT_CONTROL` dataset:

```javascript
addBaseLevelValue('DOCUMENT_CONTROL', 'doc__type_description', 'AGREEMENT')
  .then(() => console.log('Value added successfully'))
  .catch((error) => console.error(error.message));
```

To remove a base level value:

```javascript
removeBaseLevelValue('DOCUMENT_CONTROL', 'doc__type', 'AGMT')
  .then(() => console.log('Value removed successfully'))
  .catch((error) => console.error(error.message));
```

This refactored code ensures that the `baseLevelValues` object is a clear representation of all ten datasets and includes validation logic to ensure that values meet the required criteria before being saved. The validation logic for `DOCUMENT_CONTROL` related values checks if the `doc__type` and its associated properties exist in the `DocMapClassTypeParties.json` file.

Example Usage

To add a base level value for the `property_type` field in the `PROPERTY_TYPE_RECORD` dataset:

```javascript
addBaseLevelValue('PROPERTY_TYPE_RECORD', 'property_type', 'CA')
  .then(() => console.log('Value added successfully'))
  .catch((error) => console.error(error.message));
```

To add a base level value for the description field in the PROPERTY_TYPE_RECORD dataset:

```javascript
addBaseLevelValue(
  'PROPERTY_TYPE_RECORD',
  'description',
  'ADJACENT CONDOMINIUM UNIT TO BE COMBINED'
)
  .then(() => console.log('Value added successfully'))
  .catch((error) => console.error(error.message));
```

To remove a base level value:

```javascript
removeBaseLevelValue('PROPERTY_TYPE_RECORD', 'property_type', 'CA')
  .then(() => console.log('Value removed successfully'))
  .catch((error) => console.error(error.message));
```

This refactored code ensures that the `baseLevelValues` object is a clear representation of all ten datasets and includes validation logic to ensure that values meet the required criteria before being saved. The validation logic for `PROPERTY_TYPE_RECORD` related values checks if the `property_type` and its associated description exist in the `PropertyTypeCodes.json` file.

Example Usage
To add a base level value for the `state_code` field in the `STATE_CODES` dataset:

```javascript
addBaseLevelValue('STATE_CODES', 'state_code', 'AL')
  .then(() => console.log('Value added successfully'))
  .catch((error) => console.error(error.message));
```

To add a base level value for the `description` field in the `STATE_CODES` dataset:

```javascript
addBaseLevelValue('STATE_CODES', 'description', 'ALABAMA')
  .then(() => console.log('Value added successfully'))
  .catch((error) => console.error(error.message));
```

To remove a base level value:

```javascript
removeBaseLevelValue('STATE_CODES', 'state_code', 'AL')
  .then(() => console.log('Value removed successfully'))
  .catch((error) => console.error(error.message));
```

Example Usage
To add a base level value for the `country_code` field in the `COUNTRY_CODES` dataset:

```javascript
addBaseLevelValue("COUNTRY_CODES", "country_code", "AR")
  .then(() => console.log("Value added successfully"))
  .catch((error) => console.error(error.message));
```

To add a base level value for the `description` field in the `COUNTRY_CODES` dataset:

```javascript
addBaseLevelValue("COUNTRY_CODES", "description", "ARGENTINA")
  .then(() => console.log("Value added successfully"))
  .catch((error) => console.error(error.message));
```

To remove a base level value:

```javascript
removeBaseLevelValue("COUNTRY_CODES", "country_code", "AR")
  .then(() => console.log("Value removed successfully"))
  .catch((error) => console.error(error.message));
```

This refactored code ensures that the `baseLevelValues` object is a clear representation of all ten datasets and includes validation logic to ensure that values meet the required criteria before being saved. The validation logic for `COUNTRY_CODES` related values checks if the `country_code` and its associated description exist in the `CountryCodes.json` file.
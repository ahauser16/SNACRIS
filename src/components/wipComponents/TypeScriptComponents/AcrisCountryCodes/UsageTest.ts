import React from 'react';
import AcrisCountryCodesCheckbox from './AcrisCountryCodesCheckbox';
import { COUNTRY_CODES } from './AcrisCountryCodes';

const UsageTest: React.FC = () => {
  return (
    <div>
      <h1>Country Codes</h1>
      <AcrisCountryCodesCheckbox countryCodes={COUNTRY_CODES} />
    </div>
  );
};

export default UsageTest;
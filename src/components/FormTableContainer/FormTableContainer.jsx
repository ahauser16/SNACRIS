// src/components/FormTableContainer/FormTableContainer.jsx
import React, { useState } from 'react';
import DisplayApiDataTable from '../DisplayApiDataTable/DisplayApiDataTable';
import {
  fetchRealPropertyPartiesData,
  fetchRealPropertyMasterData,
  fetchRealPropertyLegalsData,
  fetchRealPropertyReferencesData,
  fetchRealPropertyRemarksData
} from '../../api/api';

const FormTableContainer = ({ activeForm: ActiveForm, colorClass }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleTableReset = () => {
    setData([]);
    setError(null);
  };

  // Determine the fetch function based on the active form
  const getFetchFunction = () => {
    switch (ActiveForm.name) {
      case 'SearchByPartyNameForm':
        return fetchRealPropertyPartiesData;
      case 'SearchByMasterDataForm':
        return fetchRealPropertyMasterData;
      case 'SearchByLegalsDataForm':
        return fetchRealPropertyLegalsData;
      case 'SearchByReferencesDataForm':
        return fetchRealPropertyReferencesData;
      case 'SearchByRemarksDataForm':
        return fetchRealPropertyRemarksData;
      default:
        return fetchRealPropertyPartiesData; // Default fetch function
    }
  };

  const fetchFunction = getFetchFunction();

  return (
    <div className={`form-container ${colorClass}`}>
      <ActiveForm 
      setData={setData} 
      setError={setError} 
      handleTableReset={handleTableReset} 
      />
      <DisplayApiDataTable 
      data={data} 
      error={error} 
      setData={setData} 
      setError={setError} 
      fetchFunction={fetchFunction} />
    </div>
  );
};

export default FormTableContainer;
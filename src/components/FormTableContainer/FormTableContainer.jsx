// src/components/FormTableContainer/FormTableContainer.jsx
import React, { useState } from 'react';
import {
  fetchRealPropertyPartiesData,
  fetchRealPropertyMasterData,
  fetchRealPropertyLegalsData,
  fetchRealPropertyReferencesData,
  fetchRealPropertyRemarksData
} from '../../api/api';
import DisplayApiDataTable from '../DisplayApiDataTable/DisplayApiDataTable';

const FormTableContainer = ({ activeForm: ActiveForm, colorClass, data, error, setData, setError }) => {
  const handleTableReset = () => {
    setData([]);
    setError(null);
  };

  const getFetchFunction = () => {
    switch (ActiveForm.name) {
      case 'SearchByPartyNameForm':
        return fetchRealPropertyPartiesData;
      case 'SearchByAddressForm':
        return fetchRealPropertyMasterData;
      case 'SearchByDocIdCrfnForm':
        return fetchRealPropertyLegalsData;
      case 'SearchByDocTypeForm':
        return fetchRealPropertyReferencesData;
      case 'SearchByReelPageForm':
        return fetchRealPropertyRemarksData;
      case 'SearchByTransNumForm':
        return fetchRealPropertyMasterData;
      case 'SearchByUccFedLienFileNumForm':
        return fetchRealPropertyMasterData;
      default:
        return fetchRealPropertyMasterData; 
    }
  };

  const fetchFunction = getFetchFunction();

  return (
    <main className={`form-container ${colorClass}`}>
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
        fetchFunction={fetchFunction} 
      />
    </main>
  );
};

export default FormTableContainer;
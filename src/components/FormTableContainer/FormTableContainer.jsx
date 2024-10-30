// src/components/FormTableContainer/FormTableContainer.jsx
import React from 'react';
import {
  fetchRealPropertyPartiesData,
  fetchRealPropertyMasterData,
  fetchRealPropertyLegalsData,
  fetchPersonalPropertyMasterData
} from '../../api/api';
import DisplayApiDataTable from '../DisplayApiDataTable/DisplayApiDataTable';

const FormTableContainer = ({ 
  activeForm: ActiveForm, 
  colorClass, 
  data, 
  error, 
  setData, 
  setError 
}) => {
  
  const handleTableReset = () => {
    setData({ data: [], totalRecords: 0 });
    setError(null);
  };

  const getFetchFunction = () => {
    switch (ActiveForm.name) {
      case 'SearchByPartyNameForm':
        return fetchRealPropertyPartiesData;
      case 'SearchByAddressForm':
        return fetchRealPropertyLegalsData;
      case 'SearchByDocTypeForm':
      case 'SearchByTransNumForm':
      case 'SearchByDocIdCrfnForm':
      case 'SearchByReelPageForm':
        return fetchRealPropertyMasterData;
      case 'SearchByUccFedLienFileNumForm':
        return fetchPersonalPropertyMasterData;
      default:
        return fetchRealPropertyMasterData; 
    }
  };

  const getEndpoint = () => {
    switch (ActiveForm.name) {
      case 'SearchByPartyNameForm':
        return 'realPropertyParties';
      case 'SearchByAddressForm':
        return 'realPropertyLegals';
      case 'SearchByDocTypeForm':
      case 'SearchByTransNumForm':
      case 'SearchByDocIdCrfnForm':
      case 'SearchByReelPageForm':
        return 'realPropertyMaster';
      case 'SearchByUccFedLienFileNumForm':
        return 'personalPropertyMaster';
      default:
        return 'realPropertyMaster';
    }
  };

  const getResponseSchema = () => {
    switch (ActiveForm.name) {
      case 'SearchByPartyNameForm':
        return 'realPropertyPartiesFields';
      case 'SearchByAddressForm':
        return 'realPropertyLegalFields';
      case 'SearchByDocTypeForm':
      case 'SearchByTransNumForm':
      case 'SearchByDocIdCrfnForm':
      case 'SearchByReelPageForm':
        return 'realPropertyMasterFields';
      case 'SearchByUccFedLienFileNumForm':
        return 'personalPropertyMasterFields';
      default:
        return 'realPropertyMasterFields';
    }
  };

  const fetchFunction = getFetchFunction();
  const endpoint = getEndpoint();
  const responseSchema = getResponseSchema();

  return (
    <main className={`${colorClass}`}>
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
        formType={ActiveForm.name}
        endpoint={endpoint}
        responseSchema={responseSchema}
      />
    </main>
  );
};

export default FormTableContainer;
// src/components/FormTableContainer/FormTableContainer.jsx
import React from 'react';
import {
  fetchRealPropertyPartiesData,
  fetchRealPropertyMasterData,
  fetchRealPropertyLegalsData,
  fetchPersonalPropertyMasterData
} from '../../api/api';
// import DisplayApiDataTable from '../DisplayApiDataTable/DisplayApiDataTable';

const FormTableContainer = ({ 
  activeForm: ActiveForm, 
  data, 
  error, 
  setData, 
  setError 
}) => {
  
  const handleTableReset = () => {
    setData({});
    setError(null);
  };

  const getFetchFunction = () => {
    switch (ActiveForm.name) {
      case 'SearchByPartyNameForm':
        return fetchRealPropertyPartiesData, fetchRealPropertyMasterData;
      case 'SearchByPartyNameHybridForm':
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

  const fetchFunction = getFetchFunction();

  return (
    <main>
      <ActiveForm 
        setData={setData} 
        setError={setError} 
        handleTableReset={handleTableReset} 
      />
      {/* <DisplayApiDataTable 
        data={data} 
        error={error} 
        setData={setData} 
        setError={setError} 
        fetchFunction={fetchFunction} 
        formType={ActiveForm.name}
      /> */}
    </main>
  );
};

export default FormTableContainer;
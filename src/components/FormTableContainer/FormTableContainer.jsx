// src/components/FormTableContainer/FormTableContainer.jsx
import React, { useState } from 'react';
import SearchByDocIdForm from '../SearchByDocIdForm/SearchByDocIdForm';
import SearchByPartyNameForm from '../SearchByPartyNameForm/SearchByPartyNameForm';
import DisplayApiDataTable from '../DisplayApiDataTable/DisplayApiDataTable';

const FormTableContainer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div>
      <SearchByDocIdForm setData={setData} setError={setError} />
      <SearchByPartyNameForm setData={setData} setError={setError} />
      <DisplayApiDataTable data={data} error={error} />
    </div>
  );
};

export default FormTableContainer;
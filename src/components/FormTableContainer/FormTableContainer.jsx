// src/components/FormTableContainer/FormTableContainer.jsx
import React, { useState } from 'react';
import DisplayApiDataTable from '../DisplayApiDataTable/DisplayApiDataTable';

const FormTableContainer = ({ activeForm: ActiveForm, colorClass }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div className={`form-container ${colorClass}`}>
      <ActiveForm setData={setData} setError={setError} />
      <DisplayApiDataTable data={data} error={error} />
    </div>
  );
};

export default FormTableContainer;
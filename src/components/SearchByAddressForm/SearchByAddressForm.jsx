// src/components/SearchByAddressForm/SearchByAddressForm.jsx
import React, { useState } from 'react';
import { fetchRealPropertyLegalsData } from '../../api/api';
import AddressSearch from '../AddressSearch/AddressSearch';

const SearchByAddressForm = ({ setData, setError, handleTableReset }) => {
  const [soql, setSoql] = useState({
    borough: '',
    block: '',
    lot: '',
    easement: '',
    partial_lot: '',
    air_rights: '',
    subterranean_rights: '',
    property_type: [],
    street_name: '',
    unit_address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSoql((prevSoql) => ({
      ...prevSoql,
      [name]: value,
    }));
  };

  const handlePropertyTypeChange = (e) => {
    const { value, checked, type } = e.target;
    if (type === "checkbox") {
      setSoql((prevSoql) => ({
        ...prevSoql,
        property_type: checked
          ? [...prevSoql.property_type, value]
          : prevSoql.property_type.filter((propertyType) => propertyType !== value),
      }));
    } else {
      setSoql((prevSoql) => ({
        ...prevSoql,
        property_type: value ? [value] : [],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting with SoQL:", soql);

    try {
      const response = await fetchRealPropertyLegalsData(soql);
      setData(response);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setData([]);
    }
  };

  const handleFormReset = () => {
    setSoql({
      borough: '',
      block: '',
      lot: '',
      easement: '',
      partial_lot: '',
      air_rights: '',
      subterranean_rights: '',
      property_type: [],
      street_number: '',
      street_name: '',
      unit_address: '',
    });
    handleTableReset();
  };

  return (
    <form className="search-by-address-form" onSubmit={handleSubmit}>
      <AddressSearch
        soql={soql}
        handleInputChange={handleInputChange}
        handlePropertyTypeChange={handlePropertyTypeChange}
      />
      <div className="flex-container">
        <button type="submit">Search</button>
        <button type="button" onClick={handleFormReset}>Reset</button>
      </div>
    </form>
  );
};

export default SearchByAddressForm;
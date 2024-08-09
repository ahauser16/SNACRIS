// src/containers/ACRIS/RealPropertyMaster.jsx

import React, { useEffect, useState } from 'react';
import { fetchRealPropertyMasterData } from '../../utils/api';

const RealPropertyMaster = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const filters = {
    document_id: '2024061800496001',
    record_type: 'A',
    crfn: '2024000156993',
    recorded_borough: 1,
    doc_type: 'TL&R',
    document_date: '2024-06-13T00:00:00.000',
    document_amt: 0,
    recorded_datetime: '2024-06-04T00:00:00.000',
    modified_date: '2024-06-04T00:00:00.000',
    reel_yr: 0,
    reel_nbr: 0,
    reel_pg: 0,
    percent_trans: 0,
    good_through_date: '2024-06-30T00:00:00.000'
  };
  
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchRealPropertyMasterData(filters);
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Real Property Master Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default RealPropertyMaster;
// src/components/DisplayApiDataTable/DisplayApiDataTable.jsx
import React, { useState } from 'react';
import './DisplayApiDataTable.css';

const DisplayApiDataTable = ({ data, error, setData, setError, fetchFunction }) => {
    const [offset, setOffset] = useState(0);
    const limit = 10;

    const handleNext = async () => {
        const newOffset = offset + limit;
        setOffset(newOffset);
        try {
            const response = await fetchFunction({ limit, offset: newOffset });
            setData(response);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData([]);
        }
    };

    const handlePrev = async () => {
        const newOffset = Math.max(offset - limit, 0);
        setOffset(newOffset);
        try {
            const response = await fetchFunction({ limit, offset: newOffset });
            setData(response);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData([]);
        }
    };

    if (error) {
        console.log(error);
        return <p>No data available</p>;
    }

    if (!data || !Array.isArray(data.data) || data.data.length === 0) {
        return null;
    }


    const { data: records, totalRecords } = data;
    const headers = Object.keys(records[0]).filter(header => header !== 'record_type' && header !== 'good_through_date' && header !== 'name');

    return (
        <div className="api-table--container">
            <h2>Results</h2>
            <div className="api-response-details--container">
                <h3>Response Details</h3>
                <ul>
                    <li className="api-response-detail">Total Records: {totalRecords}</li>
                    <li className="api-response-detail">Displayed Records: {records.length}</li>
                    <li className="api-response-detail">API Call Status: Success</li>
                    <li className="api-response-detail">Timestamp: {new Date().toLocaleString()}</li>
                </ul>
            </div>
            {/* <fieldset className="center">
          <div className="form-row form-row--variable">
            <div className="form-group">
              <button
                type="submit"
                className="form-button infoBtn"
              >
                Search
              </button>
            </div>
            <div className="form-group">
              <button
                type="button"
                onClick={handleFormReset}
                className="form-button warningBtn"
              >
                Reset
              </button>
            </div>
          </div>
        </fieldset> */}
            <div className="api-table-form--container">
                <fieldset>
                    <legend>Table Controls</legend>
                    <div className="form-row form-row--variable">
                        <div className="form-group">
                            <button
                                type="button"
                                onClick={handlePrev}
                                disabled={offset === 0}
                                className="form-button infoBtn"
                            >
                                Prev
                            </button>
                        </div>
                        <div className="form-group">
                            <button
                                type="button"
                                className="form-button infoBtn"
                                onClick={handleNext}
                                disabled={records.length < limit}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </fieldset>
            </div>
            <table className="api-table">
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header} className={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {records.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header) => (
                                <td key={header} className={header}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayApiDataTable;
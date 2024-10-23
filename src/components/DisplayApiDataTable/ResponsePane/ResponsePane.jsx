// src/components/DisplayApiDataTable/ResponsePane.jsx
import React from 'react';
import './ResponsePane.css';

const recordTypeMapping = {
    A: "REAL PROPERTY MASTER",
    L: "REAL PROPERTY LEGALS",
    P: "REAL PROPERTY PARTIES",
    X: "REAL PROPERTY REFERENCES",
    R: "REAL PROPERTY REMARKS",
    D: "DOCUMENT CONTROL CODES",
    U: "UCC COLLATERAL CODES",
    G: "PROPERTY TYPE CODES",
    S: "STATE CODES",
    T: "COUNTRY CODES"
};

const getRecordTypeName = (recordType) => {
    return recordTypeMapping[recordType] || 'Unknown Record Type';
};

const ResponsePane = ({ data = { data: [], totalRecords: 0 } }) => {
    // Extract the record_type from the first record in the data array
    const recordType = data.data.length > 0 ? data.data[0].record_type : 'N/A';
    const recordTypeName = getRecordTypeName(recordType);

    return (
        <div className="response-pane--container">
            <div className="api-response-details--container">
                <h2>Response Details</h2>
                <ul>
                    <li className="api-response-detail">Total Records: {data.totalRecords}</li>
                    <li className="api-response-detail">Displayed Records: {data.data.length}</li>
                    <li className="api-response-detail">API Call Status: Success</li>
                    <li className="api-response-detail">Timestamp: {new Date().toLocaleString()}</li>
                    <li className="api-response-detail">Record Type(s): {recordTypeName} ({recordType})</li>
                </ul>
            </div>
        </div>
    );
};

export default ResponsePane;
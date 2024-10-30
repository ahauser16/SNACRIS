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
                    <li className="api-response-metric">
                        Total Records:
                        <span className="api-response-value">
                            {data.totalRecords}
                        </span>
                    </li>
                    <li className="api-response-metric">
                        Displayed Records:
                        <span className="api-response-value">
                            {data.data.length}
                        </span>
                    </li>
                    {/* <li className="api-response-metric">
                        API Call Status:
                        <span className="api-response-value">{data.status}</span>
                    </li> */}
                    <li className="api-response-metric">
                        Timestamp:
                        <span className="api-response-value">{new Date().toLocaleString()}</span>
                    </li>
                    <li className="api-response-metric">
                        Record Type(s):
                        <span className="record-type api-response-value" title={recordTypeName}>
                            {recordType}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ResponsePane;
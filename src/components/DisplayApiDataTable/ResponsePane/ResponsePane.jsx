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

const ResponsePane = ({ data = { crossReferencedData: [], partiesResponse: null, masterResponse: null } }) => {
    // Extract the record_type from the first record in the crossReferencedData array
    const recordType = data.crossReferencedData?.length > 0 ? data.crossReferencedData[0].record_type : 'N/A';
    const recordTypeName = getRecordTypeName(recordType);

    // Extract metadata from the partiesResponse and masterResponse
    const partiesResponseStatus = data.partiesResponse ? data.partiesResponse.status : 'N/A';
    const masterResponseStatus = data.masterResponse ? data.masterResponse.status : 'N/A';
    const partiesResponseHeaders = data.partiesResponse ? data.partiesResponse.headers : {};
    const masterResponseHeaders = data.masterResponse ? data.masterResponse.headers : {};

    return (
        <div className="response-pane--container">
            <div className="api-response-details--container">
                <h2>Response Details</h2>
                <ul>
                    <li className="api-response-metric">
                        Total Records:
                        <span className="api-response-value">
                            {data.crossReferencedData?.length}
                        </span>
                    </li>
                    <li className="api-response-metric">
                        Displayed Records:
                        <span className="api-response-value">
                            {data.crossReferencedData?.length}
                        </span>
                    </li>
                    <li className="api-response-metric">
                        Parties API Call Status:
                        <span className="api-response-value">{partiesResponseStatus}</span>
                    </li>
                    <li className="api-response-metric">
                        Master API Call Status:
                        <span className="api-response-value">{masterResponseStatus}</span>
                    </li>
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
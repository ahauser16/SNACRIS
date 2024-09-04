// src/components/DisplayApiDataTable.jsx
import React from 'react';
import './DisplayApiDataTable.css';

const DisplayApiDataTable = ({ data, error }) => {
    if (error) {
        return <p>No data available</p>;
    }

    if (!data || data.length === 0) {
        return null;
    }

    const headers = Object.keys(data[0]);

    return (
        <table className="api-table">
            <thead>
                <tr>
                    <th>Field Name</th>
                    {data.map((_, index) => (
                        <th key={index}>Field Value</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {headers.map((header) => (
                    <tr key={header}>
                        <td>{header}</td>
                        {data.map((row, index) => (
                            <td key={index}>{row[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DisplayApiDataTable;
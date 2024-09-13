import React from 'react';
import './DisplayApiDataTable.css';

const DisplayApiDataTable = ({ data, error }) => {
    if (error) {
        console.log(error);
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
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header) => (
                            <td key={header}>{row[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DisplayApiDataTable;
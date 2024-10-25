// src/components/DisplayApiDataTable/ColumnsConfig/columnsRealPropertyLegals.jsx
import React from "react";
import propertyTypeCodes from "../../AcrisData/PropertyTypeCodes.json";

// Create a mapping function
const getPropertyTypeDescription = (propertyType) => {
    const match = propertyTypeCodes.find(code => code.property_type === propertyType);
    return match ? match.description : propertyType;
};

// Create a mapping function for boroughs
const getBoroughName = (borough) => {
    switch (borough) {
        case '1':
            return 'Manhattan';
        case '2':
            return 'Bronx';
        case '3':
            return 'Brooklyn';
        case '4':
            return 'Queens';
        case '5':
            return 'Staten Island';
        default:
            return borough;
    }
};

export const columnsRealPropertyLegalsFull = [
    {
        Header: 'Borough',
        accessor: 'borough',
        Cell: ({ value, column }) => {
            const boroughName = getBoroughName(value);

            return (
                <>
                    <span className="header-name--compact">{column.Header}:</span>
                    {boroughName ? boroughName : <span className="no-api-data-in-response" aria-live="polite">No Borough Data</span>}
                </>
            )
        },
    },
    {
        Header: 'Block',
        accessor: 'block',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Block Data</span>}
            </>
        ),
    },
    {
        Header: 'Lot',
        accessor: 'lot',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Lot Data</span>}
            </>
        ),
    },
    {
        Header: 'Street Number',
        accessor: 'street_number',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Street Number Data</span>}
            </>
        ),
    },
    {
        Header: 'Street Name',
        accessor: 'street_name',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Street Name Data</span>}
            </>
        ),
    },
    {
        Header: 'Unit',
        accessor: 'unit',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Unit Data</span>}
            </>
        ),
    },
    {
        Header: 'Property Type',
        accessor: 'property_type',
        Cell: ({ value, column }) => {
            const displayValue = getPropertyTypeDescription(value);
            return (
                <>
                    <span className="header-name--compact">{column.Header}:</span>
                    {displayValue ? displayValue : <span className="no-api-data-in-response" aria-live="polite">No Property Type Data</span>}
                </>
            );
        },
    },
    {
        Header: 'Partial Lot',
        accessor: 'partial_lot',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Partial Lot Data</span>}
            </>
        ),
    },
    {
        Header: 'Easement',
        accessor: 'easement',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Easement Data</span>}
            </>
        ),
    },
    {
        Header: 'Air Rights',
        accessor: 'air_rights',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Air Rights Data</span>}
            </>
        ),
    },
    {
        Header: 'Subterranean Rights',
        accessor: 'subterranean_rights',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Subterranean Rights Data</span>}
            </>
        ),
    },
];
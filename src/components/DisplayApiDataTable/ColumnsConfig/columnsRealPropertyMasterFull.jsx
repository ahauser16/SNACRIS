// src/components/DisplayApiDataTable/ColumnsConfig/columnsRealPropertyMasterFull.jsx
import React from 'react';
import DocMapClassTypeParties from "../../AcrisData/DocMapClassTypeParties.json";

const getDocTypeDetails = (docType) => {
    const match = DocMapClassTypeParties.find(doc => doc.doc__type === docType);
    return match ? `${match.doc__type_description}\n${match.class_code_description}` : docType;
};

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

export const columnsRealPropertyMasterFull = [
    {
        Header: 'Document ID',
        accessor: 'document_id',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                <a href={`https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=${value}`}>
                    {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Document ID Data</span>}
                </a>
            </>
        ),
    },
    {
        Header: 'CRFN',
        accessor: 'crfn',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No CRFN Data</span>}
            </>
        ),
    },
    {
        Header: 'Recorded Borough',
        accessor: 'recorded_borough',
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
        Header: 'Doc Type',
        accessor: 'doc_type',
        Cell: ({ value, column }) => {
            const docTypeDetails = getDocTypeDetails(value);
            return (
                <>
                    <span className="header-name--compact">
                        {column.Header}:
                    </span>
                    <span style={{ whiteSpace: 'pre-line' }}>
                        {docTypeDetails ? docTypeDetails : <span className="no-api-data-in-response" aria-live="polite">No Doc Type Data</span>}
                    </span>
                </>
            );
        },
    },
    {
        Header: 'Document Date',
        accessor: 'document_date',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value ? new Date(value).toLocaleDateString() : <span className="no-api-data-in-response" aria-live="polite">No Document Date Data</span>}
            </>
        ),
    },
    {
        Header: 'Recorded DateTime',
        accessor: 'recorded_datetime',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value ? new Date(value).toLocaleDateString() : <span className="no-api-data-in-response" aria-live="polite">No Recorded DateTime Data</span>}
            </>
        ),
    },
    {
        Header: 'Modified Date',
        accessor: 'modified_date',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value ? new Date(value).toLocaleDateString() : <span className="no-api-data-in-response" aria-live="polite">No Modified Date Data</span>}
            </>
        ),
    },
    {
        Header: 'Document Amount',
        accessor: 'document_amt',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value ? `$${value}` : <span className="no-api-data-in-response" aria-live="polite">No Document Amount Data</span>}
            </>
        ),
    },
    {
        Header: 'Percent Transferred',
        accessor: 'percent_trans',
        Cell: ({ value, column }) => {
            const formattedValue = value ? parseFloat(value).toFixed(2) + "%" : <span className="no-api-data-in-response" aria-live="polite">No Percent Transferred Data</span>;
            return (
                <>
                    <span className="header-name--compact">
                        {column.Header}:
                    </span>
                    {formattedValue}
                </>
            );
        },
    },
    {
        Header: 'Reel Year',
        accessor: 'reel_yr',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value === "0" ? <span className="no-api-data-in-response" aria-live="polite">No Data</span> : value}
            </>
        ),
    },
    {
        Header: 'Reel Number',
        accessor: 'reel_nbr',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value === "0" ? <span className="no-api-data-in-response" aria-live="polite">No Data</span> : value}
            </>
        ),
    },
    {
        Header: 'Reel Page',
        accessor: 'reel_pg',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value === "0" ? <span className="no-api-data-in-response" aria-live="polite">No Data</span> : value}
            </>
        ),
    },
];
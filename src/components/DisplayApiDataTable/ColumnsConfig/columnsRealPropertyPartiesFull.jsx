// src/components/DisplayApiDataTable/ColumnsConfig/columnsRealPropertyPartiesFull.jsx
import React from 'react';

export const columnsRealPropertyPartiesFull = [
    {
        Header: 'Document ID',
        accessor: 'document_id',
        Cell: ({ value }) => (
            value ? (
                <a href={`https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=${value}`}>{value}</a>
            ) : (
                <span className="no-api-data-in-response" aria-live="polite">No Data</span>
            )
        ),
    },
    {
        Header: 'Party Type',
        accessor: 'party_type',
        Cell: ({ value }) => (
            value ? value : <span className="no-api-data-in-response" aria-live="polite">No Data</span>
        ),
    },
    {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value }) => (
            value ? value : <span className="no-api-data-in-response" aria-live="polite">No Data</span>
        ),
    },
    {
        Header: 'Address 1',
        accessor: 'address_1',
        Cell: ({ value }) => (
            value ? value : <span className="no-api-data-in-response" aria-live="polite">No Data</span>
        ),
    },
    {
        Header: 'Address 2',
        accessor: 'address_2',
        Cell: ({ value }) => (
            value ? value : <span className="no-api-data-in-response" aria-live="polite">No Data</span>
        ),
    },
    {
        Header: 'City',
        accessor: 'city',
        Cell: ({ value }) => (
            value ? value : <span className="no-api-data-in-response" aria-live="polite">No Data</span>
        ),
    },
    {
        Header: 'State',
        accessor: 'state',
        Cell: ({ value }) => (
            value ? value : <span className="no-api-data-in-response" aria-live="polite">No Data</span>
        ),
    },
    {
        Header: 'Zip',
        accessor: 'zip',
        Cell: ({ value }) => (
            value ? value : <span className="no-api-data-in-response" aria-live="polite">No Data</span>
        ),
    },
    {
        Header: 'Country',
        accessor: 'country',
        Cell: ({ value }) => (
            value ? value : <span className="no-api-data-in-response" aria-live="polite">No Data</span>
        ),
    },
];
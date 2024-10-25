//src/components/DisplayApiDataTable/ColumnsConfig/columnsRealPropertyMaster.jsx
import React from 'react';  


export const columnsPersonalPropertyMaster = [
    {
        Header: 'Document ID',
        accessor: 'document_id',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                <a href={`https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=${value}`}>
                    {value}
                </a>
            </>
        ),
    },
    {
        Header: 'Record Type',
        accessor: 'record_type',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value}
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
                {value}
            </>
        ),
    },
    {
        Header: 'Recorded Borough',
        accessor: 'recorded_borough',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value}
            </>
        ),
    },
    {
        Header: 'Doc Type',
        accessor: 'doc_type',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value}
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
                {value}
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
                {value}
            </>
        ),
    },
    {
        Header: 'UCC Collateral',
        accessor: 'ucc_collateral',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value}
            </>
        ),
    },
    {
        Header: 'FedTax Serial Number',
        accessor: 'fedtax_serial_nbr',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value}
            </>
        ),
    },
    {
        Header: 'FedTax Assessment Date',
        accessor: 'fedtax_assessment_date',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value}
            </>
        ),
    },
    {
        Header: 'RPTTL Number',
        accessor: 'rpttl_nbr',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value}
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
                {value}
            </>
        ),
    },
    {
        Header: 'Reel Year',
        accessor: 'reel_yr',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value}
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
                {value}
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
                {value}
            </>
        ),
    },
    {
        Header: 'File Number',
        accessor: 'file_nbr',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value}
            </>
        ),
    },
    {
        Header: 'Good Through Date',
        accessor: 'good_through_date',
        className: 'good_through_date',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {new Date(value).toLocaleDateString()}
            </>
        ),
    },
];
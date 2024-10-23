// src/components/DisplayApiDataTable/columnConfigurations.js
import React from 'react';

export const columnsRealPropertyPartiesCompact = [
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
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Address',
        accessor: 'address',
        Cell: ({ row, column }) => {
            const { address_1, address_2, city, state, zip, country } = row.original;

            // Filter out empty address components and join city, state, zip, country
            const locationParts = [city, state, zip, country].filter(Boolean).join(', ');

            return (
                <>
                    <span className="header-name--compact" aria-hidden="true">
                        {column.Header}:
                    </span>
                    <>
                        {address_1 && <>{address_1}<br /></>}
                        {address_2 && <>{address_2}<br /></>}
                        {locationParts && <>{locationParts}</>}
                    </>
                </>
            )
        },
    },
];

export const columnsRealPropertyPartiesFull = [
    {
        Header: 'Document ID',
        accessor: 'document_id',
        Cell: ({ value }) => <a href={`https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=${value}`}>{value}</a>,
    },
    { Header: 'Party Type', accessor: 'party_type' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Address 1', accessor: 'address_1' },
    { Header: 'Address 2', accessor: 'address_2' },
    { Header: 'City', accessor: 'city' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Zip', accessor: 'zip' },
    { Header: 'Country', accessor: 'country' },
];

export const columnsRealPropertyLegals = [
    {
        Header: 'Borough',
        accessor: 'borough',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Block',
        accessor: 'block',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Lot',
        accessor: 'lot',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Partial Lot',
        accessor: 'partial_lot',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Easement',
        accessor: 'easement',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Air Rights',
        accessor: 'air_rights',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Subterranean Rights',
        accessor: 'subterranean_rights',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Property Type',
        accessor: 'property_type',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Street Number',
        accessor: 'street_number',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Street Name',
        accessor: 'street_name',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
    {
        Header: 'Unit',
        accessor: 'unit',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                {value}
            </>
        ),
    },
];

export const columnsRealPropertyMaster = [
    {
        Header: 'Document ID',
        accessor: 'document_id',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
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
        Header: 'Document Date',
        accessor: 'document_date',
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
        Header: 'Percent Trans',
        accessor: 'percent_trans',
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
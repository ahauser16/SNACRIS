// src/components/DisplayApiDataTable/columnConfigurations.js
import React from 'react';

export const columnsRealPropertyPartiesCompact = [
    {
        Header: 'Document ID',
        accessor: 'document_id',
        Cell: ({ value, column }) => (
            <td data-before={column.Header}>
                <a href={`https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=${value}`}>
                    {value}
                </a>
            </td>
        ),
    },
    // { Header: 'Record Type', accessor: 'record_type', className: 'record_type' },
    // { Header: 'Party Type', accessor: 'party_type', className: 'party_type' },
    { Header: 'Name', accessor: 'name' },
    {
        Header: 'Address',
        accessor: 'address',
        Cell: ({ row }) => {
            const addressParts = [
                row.original.address_1,
                row.original.address_2,
                row.original.city,
                row.original.state,
                row.original.zip,
                row.original.country
            ].filter(part => part && part.trim() !== '');

            return <div className="address-cell">{addressParts.join(', ')}</div>;
        },
    },
    // { Header: 'Good Through Date', accessor: 'good_through_date', className: 'good_through_date', Cell: ({ value }) => new Date(value).toLocaleDateString() },
];

export const columnsRealPropertyPartiesFull = [
    {
        Header: 'Document ID',
        accessor: 'document_id',
        Cell: ({ value }) => <a href={`https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=${value}`}>{value}</a>,
    },
    { Header: 'Record Type', accessor: 'record_type', className: 'record_type' },
    { Header: 'Party Type', accessor: 'party_type', className: 'party_type' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Address 1', accessor: 'address_1' },
    { Header: 'Address 2', accessor: 'address_2' },
    { Header: 'City', accessor: 'city' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Zip', accessor: 'zip' },
    { Header: 'Country', accessor: 'country' },
    {
        Header: 'Good Through Date',
        accessor: 'good_through_date',
        className: 'good_through_date', Cell: ({ value }) => new Date(value).toLocaleDateString()
    },
];

export const columnsRealPropertyLegals = [
    {
        Header: 'Borough',
        accessor: 'borough',
    },
    { Header: 'Block', accessor: 'block' },
    { Header: 'Lot', accessor: 'lot' },
    { Header: 'Easement', accessor: 'easement' },
    { Header: 'Partial Lot', accessor: 'partial_lot' },
    { Header: 'Air Rights', accessor: 'air_rights' },
    { Header: 'Subterranean Rights', accessor: 'subterranean_rights' },
    { Header: 'Property Type', accessor: 'property_type' },
    { Header: 'Street Number', accessor: 'street_number' },
    { Header: 'Street Name', accessor: 'street_name' },
    { Header: 'Unit', accessor: 'unit' },
];

export const columnsRealPropertyMaster = [
    {
        Header: 'Document ID',
        accessor: 'document_id',
        Cell: ({ value }) => <a href={`https://example.com/document/${value}`}>{value}</a>,
    },
    { Header: 'Record Type', accessor: 'record_type', className: 'record_type' },
    { Header: 'CRFN', accessor: 'crfn' },
    { Header: 'Recorded Borough', accessor: 'recorded_borough' },
    { Header: 'Doc Type', accessor: 'doc_type' },
    { Header: 'Document Date', accessor: 'document_date' },
    { Header: 'Document Amount', accessor: 'document_amt' },
    { Header: 'Recorded DateTime', accessor: 'recorded_datetime' },
    { Header: 'Modified Date', accessor: 'modified_date' },
    { Header: 'Reel Year', accessor: 'reel_yr' },
    { Header: 'Reel Number', accessor: 'reel_nbr' },
    { Header: 'Reel Page', accessor: 'reel_pg' },
    { Header: 'Percent Trans', accessor: 'percent_trans' },
    { Header: 'Good Through Date', accessor: 'good_through_date', className: 'good_through_date', Cell: ({ value }) => new Date(value).toLocaleDateString() },
];

export const columnsPersonalPropertyMaster = [
    {
        Header: 'Document ID',
        accessor: 'document_id',
        Cell: ({ value }) => <a href={`https://example.com/document/${value}`}>{value}</a>,
    },
    { Header: 'Record Type', accessor: 'record_type', className: 'record_type' },
    { Header: 'CRFN', accessor: 'crfn' },
    { Header: 'Recorded Borough', accessor: 'recorded_borough' },
    { Header: 'Doc Type', accessor: 'doc_type' },
    { Header: 'Document Amount', accessor: 'document_amt' },
    { Header: 'Recorded DateTime', accessor: 'recorded_datetime' },
    { Header: 'UCC Collateral', accessor: 'ucc_collateral' },
    { Header: 'FedTax Serial Number', accessor: 'fedtax_serial_nbr' },
    { Header: 'FedTax Assessment Date', accessor: 'fedtax_assessment_date' },
    { Header: 'RPTTL Number', accessor: 'rpttl_nbr' },
    { Header: 'Modified Date', accessor: 'modified_date' },
    { Header: 'Reel Year', accessor: 'reel_yr' },
    { Header: 'Reel Number', accessor: 'reel_nbr' },
    { Header: 'Reel Page', accessor: 'reel_pg' },
    { Header: 'File Number', accessor: 'file_nbr' },
    { Header: 'Good Through Date', accessor: 'good_through_date', className: 'good_through_date', Cell: ({ value }) => new Date(value).toLocaleDateString() },
];
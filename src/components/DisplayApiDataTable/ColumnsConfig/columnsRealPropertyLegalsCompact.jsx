// src/components/DisplayApiDataTable/ColumnsConfig/columnsRealPropertyLegalsCompact.jsx
import React from "react";
import propertyTypeCodes from "../../AcrisData/PropertyTypeCodes.json";

const getPropertyTypeDescription = (propertyType) => {
    const match = propertyTypeCodes.find(code => code.property_type === propertyType);
    return match ? match.description : propertyType;
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

export const columnsRealPropertyLegalsCompact = [
    {
        Header: 'Document ID',
        accessor: 'document_id',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">{column.Header}:</span>
                <a href={`https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=${value}`}>
                    {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Document ID Data</span>}
                </a>
            </>
        ),
    },
    {
        Header: 'BBL',
        accessor: 'bbl',
        Cell: ({ row, column }) => {
            const { borough, block, lot } = row.original;
            const boroughName = getBoroughName(borough);

            // Format the BBL display
            const formattedBBL = `${boroughName}, Block ${block}, Lot ${lot}`;

            return (
                <>
                    <span className="header-name--compact" aria-hidden="true" >
                        {column.Header}:
                    </span>
                    <>
                        {formattedBBL}
                    </>
                </>
            )
        },
    },
    {
        Header: 'Address',
        accessor: 'address',
        Cell: ({ row, column }) => {
            const { street_number, street_name, unit } = row.original;

            // Check if all fields are blank
            const isAllFieldsBlank = !street_number && !street_name && !unit;

            // Format the address display
            const formattedStreetAddress = isAllFieldsBlank
                ? <span className="no-api-data-in-response" aria-live="polite">No Street Address Data</span>
                : `${street_number || <span className="no-api-data-in-response" aria-live="polite">No Street Number Data</span>} ${street_name || <span className="no-api-data-in-response" aria-live="polite">No Street Name Data</span>} ${unit !== undefined ? (unit || <span className="no-api-data-in-response" aria-live="polite">No Unit Data</span>) : ''}`;

            return (
                <>
                    <span className="header-name--compact" aria-hidden="true" >
                        {column.Header}:
                    </span>
                    <>
                        {formattedStreetAddress}
                    </>
                </>
            )
        },
    },
    {
        Header: 'Property Type',
        accessor: 'property_type',
        Cell: ({ value, column }) => {
            const displayValue = getPropertyTypeDescription(value);
            return (
                <>
                    <span className="header-name--compact" >{column.Header}:</span>
                    {displayValue || <span className="no-api-data-in-response" aria-live="polite">No Property Type Data</span>}
                </>
            );
        },
    },
    {
        Header: 'Partial Lot',
        accessor: 'partial_lot',
        Cell: ({ value, column }) => {
            let displayValue;
            switch (value) {
                case 'E':
                    displayValue = 'Entire Lot';
                    break;
                case 'P':
                    displayValue = 'Partial Lot';
                    break;
                case 'N':
                    displayValue = 'Not Applicable';
                    break;
                default:
                    displayValue = value;
            }
            return (
                <>
                    <span className="header-name--compact" >
                        {column.Header}:
                    </span>
                    {displayValue || <span className="no-api-data-in-response" aria-live="polite">No Partial Lot Data</span>}
                </>
            );
        },
    },
    {
        Header: 'Easement',
        accessor: 'easement',
        Cell: ({ value, column }) => {
            let displayValue;
            switch (value) {
                case 'Y':
                    displayValue = 'Yes';
                    break;
                case 'N':
                    displayValue = 'No';
                    break;
                default:
                    displayValue = value;
            }
            return (
                <>
                    <span className="header-name--compact" >
                        {column.Header}:
                    </span>
                    {displayValue || <span className="no-api-data-in-response" aria-live="polite">No Easement Data</span>}
                </>
            );
        },
    },
    {
        Header: 'Air Rights',
        accessor: 'air_rights',
        Cell: ({ value, column }) => {
            let displayValue;
            switch (value) {
                case 'Y':
                    displayValue = 'Yes';
                    break;
                case 'N':
                    displayValue = 'No';
                    break;
                default:
                    displayValue = value;
            }
            return (
                <>
                    <span className="header-name--compact" >
                        {column.Header}:
                    </span>
                    {displayValue || <span className="no-api-data-in-response" aria-live="polite">No Air Rights Data</span>}
                </>
            );
        },
    },
    {
        Header: 'Subterranean Rights',
        accessor: 'subterranean_rights',
        Cell: ({ value, column }) => {
            let displayValue;
            switch (value) {
                case 'Y':
                    displayValue = 'Yes';
                    break;
                case 'N':
                    displayValue = 'No';
                    break;
                default:
                    displayValue = value;
            }
            return (
                <>
                    <span className="header-name--compact" >
                        {column.Header}:
                    </span>
                    {displayValue || <span className="no-api-data-in-response" aria-live="polite">No Subterranean Rights Data</span>}
                </>
            );
        },
    },
];
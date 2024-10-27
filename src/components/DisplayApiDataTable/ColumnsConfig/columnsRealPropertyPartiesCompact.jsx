// src/components/DisplayApiDataTable/ColumnsConfig/columnsRealPropertyPartiesCompact.jsx
import React, { useState } from 'react';
import AddToLocalStorageIcon from '../../../LocalStorage/AddToLocalStorageIcon/AddToLocalStorageIcon';
import { addBaseLevelValue } from '../../../LocalStorage/LocalStorage';

const dataset = 'ACRIS_REAL_PROPERTY_PARTIES';


export const columnsRealPropertyPartiesCompact = [
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
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value, column }) => {
            const [isHovered, setIsHovered] = useState(false);

            const handleAddToLocalStorage = () => {
                console.log('Icon clicked, value:', value);
                addBaseLevelValue(dataset, 'name', value);
            };

            return (
                <>
                    <span className="header-name--compact">
                        {column.Header}:
                    </span>
                    {value ? (
                        <>
                            {value}
                            <AddToLocalStorageIcon
                                isHovered={isHovered}
                                setIsHovered={setIsHovered}
                                onClick={handleAddToLocalStorage}
                            />
                        </>
                    ) : (
                        <span className="no-api-data-in-response" aria-live="polite">No Name Data</span>
                    )}
                </>
            );
        },
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
                        {address_1 ? <>{address_1}<br /></> : <span className="no-api-data-in-response" aria-live="polite">No Address 1 Data</span>}
                        {address_2 && <>{address_2}<br /></>}
                        {locationParts ? <>{locationParts}</> : <span className="no-api-data-in-response" aria-live="polite">No Location Data</span>}
                    </>
                </>
            )
        },
    },
    {
        Header: 'Party Type',
        accessor: 'party_type',
        Cell: ({ value, column }) => (
            <>
                <span className="header-name--compact">
                    {column.Header}:
                </span>
                {value ? value : <span className="no-api-data-in-response" aria-live="polite">No Party Type Data</span>}
            </>
        ),
    },
];
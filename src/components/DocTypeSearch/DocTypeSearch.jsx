// src/components/DocTypeSearch/DocTypeSearch.jsx
import React, { useState } from 'react';
import DateRangeInput from './DateRangeInput/DateRangeInput';
import DateRangeSelect from './DateRangeSelect/DateRangeSelect';
import DateExactInput from './DateExactInput/DateExactInput';
import DocumentTypeSelect from './DocumentTypeSelect/DocumentTypeSelect';
import DocumentClassSelect from './DocumentClassSelect/DocumentClassSelect';
import BoroughSelect from '../AddressSearch/BoroughSelect/BoroughSelect';
import './DocTypeSearch.css';

function DocTypeSearch({ docTypeSoql, handleInputChange, handleErrorDisplay, inputUserErrors }) {
    const [dateInputType, setDateInputType] = useState('rangeSelect');

    const handleDateInputTypeChange = (e) => {
        setDateInputType(e.target.value);
        handleInputChange({ target: { name: 'document_date', value: '' } }); // Reset document_date value
    };

    return (
        <fieldset className="doc-type-search--container">
            <legend className="doc-type-search--legend">Search By Document Class/Type</legend>
            <div className="date-input-type-selector">
                <label>
                    <input
                        type="radio"
                        name="dateInputType"
                        value="rangeSelect"
                        checked={dateInputType === 'rangeSelect'}
                        onChange={handleDateInputTypeChange}
                    />
                    Date Range Select
                </label>
                <label>
                    <input
                        type="radio"
                        name="dateInputType"
                        value="exact"
                        checked={dateInputType === 'exact'}
                        onChange={handleDateInputTypeChange}
                    />
                    Exact Date
                </label>
                <label>
                    <input
                        type="radio"
                        name="dateInputType"
                        value="rangeInput"
                        checked={dateInputType === 'rangeInput'}
                        onChange={handleDateInputTypeChange}
                    />
                    Date Range Input
                </label>
            </div>
            {dateInputType === 'rangeSelect' && (
                <DateRangeSelect
                    value={docTypeSoql.document_date}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.document_date}
                />
            )}
            {dateInputType === 'exact' && (
                <DateExactInput
                    value={docTypeSoql.document_date}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.document_date}
                />
            )}
            {dateInputType === 'rangeInput' && (
                <DateRangeInput
                    value={docTypeSoql.document_date}
                    onChange={handleInputChange}
                    handleErrorDisplay={handleErrorDisplay}
                    error={inputUserErrors.document_date}
                />
            )}
            <DocumentTypeSelect
                value={docTypeSoql.document_type}
                onChange={handleInputChange}
                handleErrorDisplay={handleErrorDisplay}
                error={inputUserErrors.document_type}
            />
            <DocumentClassSelect
                value={docTypeSoql.document_class}
                onChange={handleInputChange}
                handleErrorDisplay={handleErrorDisplay}
                error={inputUserErrors.document_class}
            />
            {/* The issue lies in the name attribute of the select element in the BoroughSelect component. The name attribute should match the key in the docTypeSoql state object. Currently, the name attribute is set to "borough" in the BoroughSelect component, but it should be "recorded_borough" to match the state key. */}
            <BoroughSelect
                value={docTypeSoql.recorded_borough}
                onChange={(e) => handleInputChange({ target: { name: 'recorded_borough', value: e.target.value } })}
                handleErrorDisplay={(name, errorMessage) => handleErrorDisplay('recorded_borough', errorMessage)}
                error={inputUserErrors.recorded_borough}
            />
        </fieldset>
    );
}

export default DocTypeSearch;
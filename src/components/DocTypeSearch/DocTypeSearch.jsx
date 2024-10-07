import React from 'react'
import DateRangeInput from './DateRangeInput/DateRangeInput';
import DateRangeSelect from './DateRangeSelect/DateRangeSelect';
import DocumentTypeSelect from './DocumentTypeSelect/DocumentTypeSelect';
import DocumentClassSelect from './DocumentClassSelect/DocumentClassSelect';
import BoroughSelect from '../AddressSearch/BoroughSelect/BoroughSelect';
import './DocTypeSearch.css'

function DocTypeSearch({
    soql,
    handleInputChange,
    handleErrorDisplay,
    inputUserErrors
}) {
    return (
        <fieldset className="doc-type-search--container">
            <legend className="doc-type-search--legend">
                Search By Document Class/Type
            </legend>
            <DateRangeInput
                soql={soql}
                onChange={handleInputChange}
                handleErrorDisplay={handleErrorDisplay}
                inputUserErrors={inputUserErrors}
            />
            <DateRangeSelect
                soql={soql}
                onChange={handleInputChange}
                handleErrorDisplay={handleErrorDisplay}
                inputUserErrors={inputUserErrors}
            />
            <DocumentTypeSelect
                soql={soql}
                onChange={handleInputChange}
                handleErrorDisplay={handleErrorDisplay}
                inputUserErrors={inputUserErrors}
            />
            <DocumentClassSelect
                soql={soql}
                onChange={handleInputChange}
                handleErrorDisplay={handleErrorDisplay}
                inputUserErrors={inputUserErrors}
            />
            <BoroughSelect
                soql={soql}
                onChange={handleInputChange}
                handleErrorDisplay={handleErrorDisplay}
                inputUserErrors={inputUserErrors}
            />
        </fieldset>
    )
}

export default DocTypeSearch
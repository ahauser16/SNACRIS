import React from 'react'
import CheckboxSample from '../CustomFormStyling/components/CheckboxSample';
import RadioBtnSample from '../CustomFormStyling/components/RadioBtnSample';
import SelectSample from '../CustomFormStyling/components/SelectSample';
import TextInputSample from '../CustomFormStyling/components/TextInputSample';
import ButtonSample from '../CustomFormStyling/components/ButtonSample';
import FieldsetSample from '../CustomFormStyling/FieldsetSample';
import './css/FormTestArea.css';

const FormTestArea = () => {
    return (
        <>
            <header>
                <h1>Form Test Area</h1>
            </header>
            <main>
                <FieldsetSample />
                <TextInputSample />
                <CheckboxSample />
                <RadioBtnSample />
                <SelectSample />
                <ButtonSample />
            </main>
        </>
    )
}

export default FormTestArea
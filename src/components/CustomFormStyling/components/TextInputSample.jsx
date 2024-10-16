import React from 'react';

const TextInputSample = () => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="text-input">Text input</label>
                <input className="form-field" type="text" id="text-input" name="text-input" />
            </div>

            <div className="form-group">
                <label htmlFor="disabled-input">Disabled input</label>
                <input
                    className="form-field"
                    type="text"
                    id="disabled-input"
                    name="disabled-input"
                    disabled
                />
            </div>

            <div className="form-group">
                <label htmlFor="textarea">Textarea</label>
                <textarea className="form-field" id="textarea" name="textarea"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="textarea-disabled">Textarea Disabled</label>
                <textarea
                    className="form-field"
                    disabled
                    id="textarea-disabled"
                    name="textarea-disabled"
                ></textarea>
            </div>
        </>
    );
};

export default TextInputSample;
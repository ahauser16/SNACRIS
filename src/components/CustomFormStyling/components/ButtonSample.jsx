import React from 'react'

const ButtonSample = () => {
    return (
        <>
            <div className="form-group">
                <button type="submit" className="form-button">Submit</button>
            </div>

            <div className="form-group">
                <button type="submit" className="form-button" disabled>Submit</button>
            </div>
        </>
    )
}

export default ButtonSample
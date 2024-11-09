// src/components/ErrorMessagesDisplay.jsx
import React from 'react';

const ErrorMessageDisplay = ({ errorMessages }) => {
  return (
    errorMessages.length > 0 && (
      <div className="form-row">
        <span className="error-msg-display">
          <ul>
            {errorMessages.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </span>
      </div>
    )
  );
};

export default ErrorMessageDisplay;
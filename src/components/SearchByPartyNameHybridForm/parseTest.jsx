import React, { useState, useEffect } from 'react';

const ApiResponseParser = ({ jsonResponse }) => {
    const [parsedData, setParsedData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            // Parse JSON if it's in string format
            const data = typeof jsonResponse === 'string' ? JSON.parse(jsonResponse) : jsonResponse;
            setParsedData(data.response); // Set parsed `response` object to state
            setError(null); // Clear any previous error
        } catch (err) {
            console.error("Failed to parse JSON response:", err);
            setError("Failed to parse JSON response");
            setParsedData(null);
        }
    }, [jsonResponse]); // Runs whenever `jsonResponse` changes

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!parsedData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Parsed API Response</h2>
            <pre>{JSON.stringify(parsedData, null, 2)}</pre>
        </div>
    );
};

export default ApiResponseParser;

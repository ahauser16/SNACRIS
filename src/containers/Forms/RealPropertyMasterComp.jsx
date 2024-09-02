// src/containers/ACRIS/RealPropertyMasterComp.jsx
import React, { useState } from 'react';
import { fetchRealPropertyMasterData } from '../../api/api';

const RealPropertyMasterComp = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [soql, setSoql] = useState({
        recorded_borough: '1',
        doc_type: 'AGMT',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSoql((prevSoql) => ({
            ...prevSoql,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting with SoQL:', soql); // Log the SoQL object
        try {
            const result = await fetchRealPropertyMasterData(soql);
            console.log('API call result:', result); // Log the result of the API call
            setData(result);
        } catch (err) {
            console.error('Error in handleSubmit:', err); // Log the error
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Real Property Master Data</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Recorded Borough:
                        <input
                            type="text"
                            name="recorded_borough"
                            value={soql.recorded_borough}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Document Type:
                        <input
                            type="text"
                            name="doc_type"
                            value={soql.doc_type}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Fetch Data</button>
            </form>
            {error && <div>Error: {error}</div>}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default RealPropertyMasterComp;
import React, { useState } from 'react';
import axios from 'axios';

function Delete() {
    const [rooftopGoogleOptionId, setRooftopGoogleOptionId] = useState(0);
    const [apiKey, setApiKey] = useState('');
    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`https://services.metricsamsi.com/v1.0/dealers/Options/${rooftopGoogleOptionId}?apiKey=${apiKey}`)
            .then((response) => {
                setData(response)
            })
            .catch((error) => {
                setData(error.response)
            })
    }

    return (
        <div style={{margin: '25px'}}>
            <h1>DELETE</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label for="rooftopGoogleOptionId">Rooftop Google Option Id: </label>
                    <input id="rooftopGoogleOptionId" type="number" onChange={(e) => setRooftopGoogleOptionId(e.target.value)} required />
                </div>
                <div>
                    <label for="apiKey">API Key: </label>
                    <input id="apiKey" type="text" onChange={(e) => setApiKey(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
                <button type="reset" onClick={() => setData({})}>Reset</button>
            </form>
            <h3>{data && data.status && data.message && `${data.status} - ${data.message}`}</h3>
            {Object.keys(data).length > 0 && JSON.stringify(data)}
        </div>
    );
}

export default Delete;

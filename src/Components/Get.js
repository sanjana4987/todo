import React, {useState} from 'react';
import axios from 'axios';

function Get(){
    const [googleId, setGoogleId] = useState(0);
    const [platformName, setPlatformName] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://services.metricsamsi.com/v1.0/dealers/Options/${googleId}?platformName=${platformName}&apiKey=${apiKey}`).then((response) => {
            setData(response.data)
        })
        .catch(error => {
            setData(error.response)
        })
    }

    return (
        <div style={{margin: '25px'}}>
            <h1>GET</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label for="googleId">Google Id: </label>
                    <input id="googleId" type="number" onChange={(e) => setGoogleId(e.target.value)} required />
                </div>
                <div>
                    <label for="platformName">Platform Name: </label>
                    <input id="platformName" type="text" onChange={(e) => setPlatformName(e.target.value)} required />
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

export default Get;

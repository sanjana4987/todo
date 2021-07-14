import React, { useState } from 'react';
import axios from 'axios';

function Patch() {
    const [rooftopGoogleOptionId, setRooftopGoogleOptionId] = useState(0);
    const [apiKey, setApiKey] = useState('');
    const [data, setData] = useState({});

    let responseObject = {
        "createdBy": "string",
        "createdAt": "2021-07-14T06:51:51.135Z",
        "updatedBy": "string",
        "updatedAt": "2021-07-14T06:51:51.135Z",
        "rooftopGoogleOptionId": 0,
        "googleId": 0,
        "dotDigitalId": 0,
        "optionName": "string",
        "optionValue": "string",
        "platformName": "string",
        "googleAccount": {
            "createdBy": "string",
            "createdAt": "2021-07-14T06:51:51.135Z",
            "updatedBy": "string",
            "updatedAt": "2021-07-14T06:51:51.135Z",
            "googleId": 0,
            "active": true,
            "viewId": 0,
            "viewName": "string",
            "credentials": "string",
            "vdpUrlPatterns": [
                {
                    "createdBy": "string",
                    "createdAt": "2021-07-14T06:51:51.135Z",
                    "updatedBy": "string",
                    "updatedAt": "2021-07-14T06:51:51.135Z",
                    "googleVdpUrlPatternId": 0,
                    "googleId": 0,
                    "newVdpUrlPattern": "string",
                    "usedVdpUrlPattern": "string",
                    "certifiedVdpUrlPattern": "string"
                }
            ]
        },
        "dotDigitalAccount": {
            "createdBy": "string",
            "createdAt": "2021-07-14T06:51:51.135Z",
            "updatedBy": "string",
            "updatedAt": "2021-07-14T06:51:51.135Z",
            "dotDigitalId": 0,
            "accountName": "string",
            "accountId": 0,
            "apiUser": "string",
            "apiPassword": "string",
            "active": true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let postBody = {
            ...responseObject,
            rooftopGoogleOptionId: rooftopGoogleOptionId
        }
        axios.patch(`https://services.metricsamsi.com/v1.0/dealers/Options/${rooftopGoogleOptionId}?apiKey=${apiKey}`, postBody)
            .then((response) => {
                setData(response.data)
            })
            .then((error) => {
                setData(error.response)
            })
    }

    return (
        <div style={{margin: '25px'}}>
            <h1>PATCH</h1>
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

export default Patch;

import React, {useState} from 'react';
import axios from 'axios';

function Post(){
    const [googleId, setGoogleId] = useState(0);
    const [dotDigitalId, setDotDigitalId] = useState(0);
    const [platformName, setPlatformName] = useState('');
    const [optionName, setOptionName] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [data, setData] = useState({});

    let responseObject = {
        "createdBy": "string",
        "createdAt": "2021-07-14T05:33:53.798Z",
        "updatedBy": "string",
        "updatedAt": "2021-07-14T05:33:53.798Z",
        "rooftopGoogleOptionId": 0,
        "googleId": 121,
        "dotDigitalId": 1,
        "optionName": "string",
        "optionValue": "string",
        "platformName": "string",
        "googleAccount": {
          "createdBy": "string",
          "createdAt": "2021-07-14T05:33:53.798Z",
          "updatedBy": "string",
          "updatedAt": "2021-07-14T05:33:53.798Z",
          "googleId": 0,
          "active": true,
          "viewId": 0,
          "viewName": "string",
          "credentials": "string",
          "vdpUrlPatterns": [
            {
              "createdBy": "string",
              "createdAt": "2021-07-14T05:33:53.798Z",
              "updatedBy": "string",
              "updatedAt": "2021-07-14T05:33:53.798Z",
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
          "createdAt": "2021-07-14T05:33:53.798Z",
          "updatedBy": "string",
          "updatedAt": "2021-07-14T05:33:53.798Z",
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
            googleId: googleId,
            dotDigitalId: dotDigitalId,
            platformName: platformName,
            optionName: optionName
        }
        axios.post(`https://services.metricsamsi.com/v1.0/dealers/Options?apiKey=${apiKey}`, postBody)
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            setData(error.response)
        })
    }

    return (
        <div style={{margin: '25px'}}>
            <h1>POST</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label for="googleId">Google Id: </label>
                    <input id="googleId" type="number" onChange={(e) => setGoogleId(e.target.value)} required />
                </div>
                <div>
                    <label for="dotDigitalId">DOT Digital Id: </label>
                    <input id="dotDigitalId" type="number" onChange={(e) => setDotDigitalId(e.target.value)} required />
                </div>
                <div>
                    <label for="platformName">Platform Name: </label>
                    <input id="platformName" type="text" onChange={(e) => setPlatformName(e.target.value)} required />
                </div>
                <div>
                    <label for="optionName">Option Name: </label>
                    <input id="optionName" type="text" onChange={(e) => setOptionName(e.target.value)} required />
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

export default Post;

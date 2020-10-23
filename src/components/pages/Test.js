import React from 'react';
import '../../App.css';

export default function Test(){
  return <h1 className='test'>Test</h1>
}

const axios = require('axios');

async function makeRequest() {

    const config = {
        method: 'get',
        url: 'http://localhost:8000/predict/image/'
    }
    let res = await axios(config)
    console.log(res.data);
}

makeRequest();
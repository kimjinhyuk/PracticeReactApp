import React, { useState } from 'react';
import '../../style.css';
import { ButtonTest } from '../Button';
import Footer from '../Footer';

export default function Test(){
  return (
    <>
    <div className='test-container'>
      <h1>Test</h1>
      <p>AI 모델을 통해서 COVID-19 와 폐렴을 예측합니다!</p>
      <div className="hero-btns">
        <ButtonTest
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </ButtonTest>
      </div>
    </div>
    <Footer />
    </>
  )
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
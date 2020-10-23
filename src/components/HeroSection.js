import React from 'react';
import '../style.css';
import { ButtonRecord } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Febreath</h1>
      <p>코로나19 종식을 위해 목소리를 녹음 해 주세요</p>
      <div className="hero-btns">
        <ButtonRecord
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </ButtonRecord>      
      </div>
    </div>
  );
}

export default HeroSection

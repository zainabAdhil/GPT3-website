import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
        </div>

        <div className="gpt3__possibility-content">
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <p>The possibilities with GPT-3 are endless, surpassing imagination. Explore new horizons, unleash creativity, and redefine innovation.</p>
          <h4>Request Early Access to Get Started</h4>
        </div>
    </div>
  )
}

export default Possibility

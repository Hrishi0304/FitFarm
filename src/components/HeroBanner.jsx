import React from 'react';
import hero from '../assets/hero.jpg';
import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <div className='hero-banner-container'>
        <section className='hero-banner'>
            <div className="hero-content-container">
                <div className="hero-content">
                    <h1>Fit Farm</h1>
                    <p>
                        Elevate Your Farming with Smart Agriculture Solutions! Harness the Power of Data, IoT, and AI to Optimize Your Crops, Boost Yields, and Farm Smarter.
                    </p>
                    <Link to="/">
                        <button>
                            GET STARTED
                        </button>
                    </Link>
                </div>
            </div>
            <div className="hero-img-container">
                <div className="hero-img">
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroBanner;
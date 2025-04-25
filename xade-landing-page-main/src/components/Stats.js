import "../styles/better.css";

import React, { useState, useEffect, useRef } from "react";
const App = () => {
  // Add state for volume
  const [volume, setVolume] = useState("$5mil+");

  // Add useEffect to fetch volume data
  useEffect(() => {
    const fetchVolume = async () => {
      try {
        const response = await fetch('https://api-evm.orderly.org/v1/public/volume/stats?broker_id=xade_finance');
        const data = await response.json();
        // Updated to handle up to 9 figures (hundreds of millions)
        const totalVolume = (15000000 + (data.data?.perp_volume_ltd || 0)).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        setVolume(totalVolume + '+');
      } catch (err) {
        console.error(err);
      }
    };
    
    fetchVolume();
  }, []);

  return (
    <div className="lol" style={{ marginTop: "3rem", backgroundColor: "black" }}>
      <div>
        <div className="more-features-center">
          <div className="more-features-top-elements" style={{ gap: '4rem' }}>
            <div className="more-features-element">
              <div className="betterhead" style={{ 
                background: 'linear-gradient(135deg, #4A90E2, #67B8F7, #1B4B82)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                <p>{volume}</p>
              </div>
              <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                Transaction volume
              </p>
            </div>
            <div className="more-features-element">
              <div className="betterhead" style={{ 
                background: 'linear-gradient(135deg, #FF4D4D, #FF7676, #CC2929)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                <p>14,567+</p>
              </div>
              <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                Active users
              </p>
            </div>
            <div className="more-features-element">
              <div className="betterhead" style={{ 
                background: 'linear-gradient(135deg, #cd7f32, #FFA07A, #8B4513)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                <p>20+</p>
              </div>
              <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                Chains supported
              </p>
            </div>
            <div className="more-features-element">
              <div className="betterhead" style={{ 
                background: 'linear-gradient(135deg, #50C878, #3CB371, #2E8B57)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                <p>8,000+</p>
              </div>
              <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                Subscriptions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

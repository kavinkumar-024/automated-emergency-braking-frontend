import React, { useState, useEffect } from 'react';
import './App.css'; // You'll need to create an App.css file for styling

const App = () => {
  const [speed, setSpeed] = useState(50); // Speed for the speedometer (between 0-100)
  const [alert, setAlert] = useState(false); // Alert state for speed under threshold

  const speedThreshold = 20;

  // Simulate speed change
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prevSpeed) => {
        const newSpeed = (prevSpeed + 1) % 101;
        if (newSpeed < speedThreshold) {
          setAlert(true);
        } else {
          setAlert(false);
        }
        return newSpeed;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>BrakeForceX: AEB Dashboard</h1>
      </header>

      <div className="main-content">
        <div className="video-feed-container">
          <h2> 🔴 Live Camera Feed</h2>
          <div className="video-feed">
            {/* Placeholder for video */}
            <div className="video-box">
              <p>Video Feed</p>
            </div>
          </div>
        </div>

        <div className="speedometer-container">
          <h2>Speed Analysis</h2>
          <div className="speedometer">
            {/* Placeholder for speedometer */}
            <div className="speed-display">
              <p>{speed}units</p>
            </div>
            
          </div>
          {alert && <div className="alert">⚠️Alert! Speed is below threshold!</div>}
        </div>
      </div>
    </div>
  );
};

export default App;

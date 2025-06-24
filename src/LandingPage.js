import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to 6APSI!</h1>
        <p className="landing-subtitle">Your journey to seamless productivity starts here.</p>
        <button className="landing-btn" onClick={() => navigate('/login')}>Get Started</button>
      </div>
      <div className="landing-visual">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="55" stroke="#2575fc" strokeWidth="8" fill="#f0f8ff" />
          <path d="M40 70 Q60 90 80 70" stroke="#6a11cb" strokeWidth="5" fill="none" />
          <circle cx="50" cy="55" r="5" fill="#2575fc" />
          <circle cx="70" cy="55" r="5" fill="#2575fc" />
        </svg>
      </div>
    </div>
  );
}

export default LandingPage; 
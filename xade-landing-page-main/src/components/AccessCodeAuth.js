import React, { useState } from 'react';
import './AccessCodeAuth.css';

const AccessCodeAuth = ({ onAuthenticated, title = "Dashboard Access" }) => {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const CORRECT_ACCESS_CODE = '54698';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a brief loading delay
    setTimeout(() => {
      if (accessCode === CORRECT_ACCESS_CODE) {
        onAuthenticated();
      } else {
        setError('Invalid access code. Please try again.');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="access-auth-container">
      <div className="access-auth-card">
        <div className="access-auth-header">
          <h2>{title}</h2>
          <p>Please enter the access code to continue</p>
        </div>
        
        <form onSubmit={handleSubmit} className="access-auth-form">
          <div className="input-group">
            <label htmlFor="accessCode">Access Code</label>
            <input
              type="password"
              id="accessCode"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="Enter access code"
              required
              className={error ? 'error' : ''}
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          
          <button 
            type="submit" 
            className="auth-submit-btn"
            disabled={isLoading || !accessCode.trim()}
          >
            {isLoading ? 'Verifying...' : 'Access Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccessCodeAuth;

import React, { useState } from 'react';

function LoginPage() {
 
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            autoComplete="username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
        </div>
        {/* Placeholder for error messages */}
        <div className="error-message" style={{ display: 'none' }}>Invalid credentials</div>
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

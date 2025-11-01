import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate that fields are not empty
    if (!username || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    
    // Clear error message
    setErrorMessage('');
    
    // Log credentials to console
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Simulate JWT token generation and storage
    const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6XCIgKyB1c2VybmFtZSArIFwiXCIsXCJleHBcIjoxNzAwMDAwMDAwfQ.dummySignature';
    localStorage.setItem('jwtToken', fakeToken);
    
    alert('Login successful! JWT token stored in localStorage.');
    
    // Redirect to protected route
    window.location.href = '/protected';
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </div>
          
          {errorMessage && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}
          
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

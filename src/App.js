import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Login route - displays the login form */}
          <Route path="/login" element={<LoginForm />} />
          
          {/* Protected route - requires valid JWT token */}
          <Route 
            path="/protected" 
            element={
              <ProtectedRoute>
                <ProtectedContent />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

// Component to display protected content
function ProtectedContent() {
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    window.location.href = '/login';
  };

  return (
    <div className="protected-container">
      <div className="protected-content">
        <h2>Protected Page</h2>
        <p>Congratulations! You have successfully accessed the protected route.</p>
        <p>This page is only accessible with a valid JWT token.</p>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default App;

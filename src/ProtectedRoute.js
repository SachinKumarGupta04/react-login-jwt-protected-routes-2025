import React from 'react';
import { Navigate } from 'react-router-dom';

// Component to protect routes based on JWT token in localStorage
function ProtectedRoute({ children }) {
  // Check if JWT token exists in localStorage
  const token = localStorage.getItem('jwtToken');
  
  // If no token exists, redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  // If token exists, render the protected component
  return children;
}

export default ProtectedRoute;

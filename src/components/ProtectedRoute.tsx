
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { session, loading } = useAuth();
  
  if (loading) {
    // You could replace this with a loading spinner
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  return session ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

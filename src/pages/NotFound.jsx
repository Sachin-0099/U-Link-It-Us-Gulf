import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <button 
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;

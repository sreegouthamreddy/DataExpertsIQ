import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to DataExpertsIQ</h1>
      <p className="text-center text-lg mb-8">
        This platform provides various functionalities:
      </p>
      <div className="tabs">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
          onClick={() => navigate('/notes')}
        >
          Notes Management
        </button>
        {/* Add other functionalities in the future */}
      </div>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded mt-8"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default LandingPage;

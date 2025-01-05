import React from 'react';

const LandingPage = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to DataExpertsIQ</h1>
      <p className="mb-8 text-lg">Your modern solution for managing notes securely.</p>
      <div>
        <a href="/signup" className="bg-blue-600 text-white px-6 py-2 rounded mr-4">Get Started</a>
        <a href="/login" className="bg-gray-600 text-white px-6 py-2 rounded">Login</a>
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";

const IntroductoryPage = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to DataExpertsIQ</h1>
      <p className="text-center text-lg mb-8">
        This is your one-stop platform for managing notes and other functionalities efficiently.
      </p>
      <div className="text-center">
        <a href="/login" className="bg-blue-600 text-white px-6 py-2 rounded mr-4">
          Login
        </a>
        <a href="/signup" className="bg-gray-600 text-white px-6 py-2 rounded">
          Signup
        </a>
      </div>
    </div>
  );
};

export default IntroductoryPage;

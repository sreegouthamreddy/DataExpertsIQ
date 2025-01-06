import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/signup', { username, email, password });
      navigate('/login', { state: { success: 'Signup successful! Please login.' } });
    } catch (err) {
      setError('Error during signup. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label className="block text-sm font-bold mb-2">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border mb-4 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="block text-sm font-bold mb-2">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="block text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

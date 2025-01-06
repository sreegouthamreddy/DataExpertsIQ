import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', { username, password });
      localStorage.setItem('token', data.token);
      navigate('/landing');
    } catch (err) {
      setError('Invalid login credentials.');
    }
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      {location.state?.success && (
        <p className="text-green-500 text-center mb-4">{location.state.success}</p>
      )}
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
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotesPage from './pages/NotesPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

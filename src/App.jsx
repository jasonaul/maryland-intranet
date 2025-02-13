import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import HR from './components/HR.jsx';
import Branding from './components/Branding';
import Communications from './components/Communications';
import Events from './components/Events';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/communications" element={<Communications />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

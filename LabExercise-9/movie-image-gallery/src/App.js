// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ImageGallery from './components/ImageGallery';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/gallery">Image Gallery</Link>
            </li>
          </ul>
        </nav>

        {/* Route setup */}
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/gallery" element={<ImageGallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

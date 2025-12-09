import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n'; // Initialize i18n
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Destinations from './pages/Destinations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Hide preloader after page load
    const preloader = document.getElementById('preloader');
    const status = document.getElementById('status');
    
    if (preloader && status) {
      setTimeout(() => {
        preloader.style.display = 'none';
        document.body.style.overflow = 'visible';
      }, 500);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;


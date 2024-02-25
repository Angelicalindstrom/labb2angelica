//Angelica Lindström NET23
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./components/Menu"
import Footer from './components/Footer';
import Home from './pages/Home';
import Cv from './pages/Cv';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';


function App() {

  return (
    
    <Router>
      <div className="site-container">
        <header className="header-container">
          <section className="header-inside">
            <div>
              <Menu className="menu" />
            </div>
          </section>
        </header>
        <main className="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;

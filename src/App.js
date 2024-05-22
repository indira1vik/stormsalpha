import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Welcome from './pages/Welcome';

import Experience from './pages/Experience';
import Bio from './pages/Bio';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />

        <Route path="/home/experience" element={<Experience />} />
        <Route path="/home/bio" element={<Bio />} />
        <Route path="/home/projects" element={<Projects />} />
        <Route path="/home/skills" element={<Skills />} />
        <Route path="/home/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;

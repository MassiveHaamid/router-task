import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import All from './components/All.jsx';
import FullStackDevelopment from './components/FullStackDevelopment.jsx';
import DataScience from './components/DataScience.jsx';
import CyberSecurity from './components/CyberSecurity.jsx';
import Career from './components/Career.jsx';

import './styles/App.css';

function App() {
  return (
    <Router>
    <div>
        <nav className="navigation">
          <Link to="/">All</Link>
          <Link to="/FullStackDevelopment">Full Stack Development</Link>
          <Link to="/DataScience">Data Science</Link>
          <Link to="/CyberSecurity">Cyber Security</Link>
          <Link to="/Career">Career</Link>
        </nav>

        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/FullStackDevelopment" element={<FullStackDevelopment />} />
          <Route path="/DataScience" element={<DataScience />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
        </div>

    </Router>
  );
}

export default App;

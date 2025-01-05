import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Projects } from './pages/Projects';
import { ModernFooter } from './components/Footer/ModernFooter';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B0F19] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <ModernFooter />
      </div>
    </Router>
  );
}

export default App;
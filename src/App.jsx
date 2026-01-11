import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Career from './components/pages/Career';
import Skill from './components/pages/Skill';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;

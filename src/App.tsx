import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import React from 'react';

import './App.css';
import './styles/global.css';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Contact />
    </div>
   
  );
}

export default App;

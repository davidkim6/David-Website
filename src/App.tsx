import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import React from 'react';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
      
    </BrowserRouter>
   
  );
}

export default App;

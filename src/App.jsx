import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />           
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/projects/:id" element={<ProjectDetail />} /> 
        <Route path="/contact" element={<Contact />} />   
      </Routes>
    </>
  );
}

export default App;

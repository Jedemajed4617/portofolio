import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from './header'; 
import Home from './home'; 
import About from './about'; 
import Footer from './footer'; 
import "./App.css";

function App() {
  return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </>
  );
}

export default App;
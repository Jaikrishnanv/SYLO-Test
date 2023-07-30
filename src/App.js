// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./compenents/LandingPage";
import SearchPage from "./compenents/SearchPage";
import Header from "./compenents/Header";


const App = () => {
  return (
    <Router>
      <div>
      <Header/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
    
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;

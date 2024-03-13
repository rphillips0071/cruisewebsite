import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom';
import CruiseSearch from './pages/CruiseSearch'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router basename="/cruisewebsite">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CruiseSearch" element={<CruiseSearch />} />
      </Routes>
    </Router>
  );
}

export default App

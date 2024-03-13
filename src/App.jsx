import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import CruiseSearch from './pages/CruiseSearch'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CruiseSearch" element={<CruiseSearch />} />
      </Routes>
    </div>
  )
}

export default App

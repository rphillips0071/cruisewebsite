import React from 'react'
import '../App.css'
import NavBar from '../components/NavBar'
import Deals from '../components/Deals'
import AboutAwesomeCruise from '../components/AboutAwesomeCruise'
import FindCruiseNow from '../components/FindCruiseNow'

function HomePage() {

  return (
    <div>
      <NavBar />
      <Deals />
      <FindCruiseNow />
      <AboutAwesomeCruise />
      
    </div>
  )
}

export default HomePage;

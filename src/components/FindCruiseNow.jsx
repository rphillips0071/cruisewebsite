import React from 'react'
import { Link } from "react-router-dom";

function FindCruiseNow() {
  return (
    <div className='find_cruise_container'>
        <div className='search_now'>
            <div className='sn_text'>
                <h2>Explore Hundreded Of Vacations <br /> Destinations Include </h2>
                <p>Mexico Bahamas Carribean South America</p>
            </div>
            <div className='sn_button'> <Link className='find_cruise_button' to="/CruiseSearch"> Find A Cruise </Link></div>
        </div>
      
    </div>
  )
}

export default FindCruiseNow

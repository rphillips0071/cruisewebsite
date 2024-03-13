// NavBar.jsx
import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPerson, faDownLong, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav>

            <div className='nav-container'>
                <div className='tc1'>
                <Link to="/" className='home_link'><img src={Logo} alt="Logo" /></Link>
                    <Link to="/" className='home_link'><h2>Awesome <p>Cruise Line</p></h2></Link>
                </div>
                <div className='tc2'></div>
                <div className='tc3'>
                    <ul>
                        <li></li>
                        <li> <FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                        <li><Link to="/CruiseSearch"> <FontAwesomeIcon icon={faHeart} /> </Link></li>
                        <li><FontAwesomeIcon className='phone-icon' icon={faPerson} />My ACL <FontAwesomeIcon className='phone-icon' icon={faDownLong} /></li>
                        <li><FontAwesomeIcon className='phone-icon' icon={faPhone} />1-800-278-4734</li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

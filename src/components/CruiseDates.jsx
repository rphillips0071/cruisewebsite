import React, { useState } from 'react';
import Dates from '../cruises.json'; // Ensure this is the correct path to your JSON file
import beach1 from '../assets/beach1.jpg'; // Ensure these are the correct paths to your image files
import beach2 from '../assets/beach2.jpg';
import beach3 from '../assets/beach3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function CruiseDates() {
  const backgroundArray = [beach1, beach2, beach3];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // State for checkbox filters, initialize them to false
  const [filters, setFilters] = useState({
    IslandSerenity: false,
    OceanDream: false,
    SunsetParadise: false,
  });

  // State to handle the visibility of the dropdown
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  function getRandomNumber() {
    return Math.floor(Math.random() * backgroundArray.length);
  }

  // Update filter state based on checkbox changes
  const handleFilterChange = (ship) => {
    setFilters(prevFilters => ({ ...prevFilters, [ship]: !prevFilters[ship] }));
  };

  // Filter the Dates array based on the checkbox state
  const filteredDates = Dates.filter((date) => {
    return (!filters.IslandSerenity && !filters.OceanDream && !filters.SunsetParadise) ||
           (filters.IslandSerenity && date.ship === "Island Serenity") ||
           (filters.OceanDream && date.ship === "Ocean Dream") ||
           (filters.SunsetParadise && date.ship === "Sunset Paradise");
  });

  return (
    <div className='cruise-dates_container'>
      {/* Dropdown Filter */}
      <div className="filter-dropdown">
        <button onClick={() => setDropdownVisible(!isDropdownVisible)} className="dropdown-button">
          Filter Ships <FontAwesomeIcon icon={faChevronDown} />
        </button>
        {isDropdownVisible && (
          <div className="dropdown-content">
            <label>
              <input
                type="checkbox"
                checked={filters.IslandSerenity}
                onChange={() => handleFilterChange('IslandSerenity')}
              /> Island Serenity
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.OceanDream}
                onChange={() => handleFilterChange('OceanDream')}
              /> Ocean Dream
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.SunsetParadise}
                onChange={() => handleFilterChange('SunsetParadise')}
              /> Sunset Paradise
            </label>
          </div>
        )}
      </div>
      
      {/* Cruise Dates Display */}
      {filteredDates.length > 0 ? (
        filteredDates.map((date, index) => {
          const fromDate = new Date(date.sailFromDate);
          const toDate = new Date(date.sailToDate);
          const duration = (toDate - fromDate) / (1000 * 60 * 60 * 24);
          const sailMonthFrom = months[fromDate.getMonth()];
          const sailMonthTo = months[toDate.getMonth()];
          return (
            <div key={index} className='cruise_date_container'>
              <div className='cruise-date'>
                <h3>{duration} day cruise on <br /> {date.ship}</h3>
                <div className='sailing_from_to'>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span> Sailing {sailMonthFrom} {fromDate.getDate()}, {fromDate.getFullYear()} - {sailMonthTo} {toDate.getDate()}, {toDate.getFullYear()}</span>
                </div>
              </div>
              <div className='cruise_image'>
                <img src={backgroundArray[getRandomNumber()]} alt="Beach View" />
              </div>
              <div>
                <ul>
                  <li>Interior: ${date.staterooms.interior}</li>
                  <li>Balcony: ${date.staterooms.balcony}</li>
                  <li>Suite: ${date.staterooms.suite}</li>
                </ul>
              </div>
            </div>
          );
        })
      ) : (
        <p>No cruises available for the selected filters.</p>
      )}
    </div>
  );
}

export default CruiseDates;

import React, { useState } from 'react';
import CruiseDates from '../components/cruiseDates';
import NavBar from '../components/NavBar';
import FilterSearch from '../components/FilterSearch';

function CruiseSearch() {


  return (
    <div>
      <NavBar />
      <CruiseDates />
    </div>
  );
}

export default CruiseSearch;

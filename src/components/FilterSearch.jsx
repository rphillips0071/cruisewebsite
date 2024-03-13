import React, { useState } from 'react';

function FilterSearch() {

  return (
    <div className='search_container'>
      <div className='search1'>
        <label className="checkbox-label">
          Island Serenity
          <input type="checkbox" className="checkbox"/>
        </label>
        <label className="checkbox-label">
        Ocean Dream
          <input type="checkbox" className="checkbox"/>
          
        </label>
        <label className="checkbox-label">
          Sunset Paradise
          <input type="checkbox" className="checkbox"/>
          
        </label>
      </div>
    </div>
  );
}

export default FilterSearch;

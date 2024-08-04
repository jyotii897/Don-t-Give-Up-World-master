import React from 'react'
import './searchbox.css'

function SearchBox() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchBox;

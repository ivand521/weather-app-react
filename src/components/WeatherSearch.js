import React from 'react';

const WeatherSearch = ({ location, handleSearch, handleChange, messageOne, messageTwo }) => (
  <div>
    <form onSubmit={handleSearch}>
      <input type='text' placeholder='Location' value={location} onChange={handleChange} />
      <button>Search</button>
    </form>

    <p>{messageOne}</p>
    <p>{messageTwo}</p>
  </div>
);

export default WeatherSearch;
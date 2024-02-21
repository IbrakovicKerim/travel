import React, { useState, useEffect } from 'react';
import TravelSummary from '../components/TravelSummary';

const HomePage = () => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    // Fetch travels from API
  }, []);

  return (
    <div>
      <h1>Current Travels</h1>
      {travels.map(travel => (
        <TravelSummary key={travel.id} travel={travel} />
      ))}
    </div>
  );
};

export default HomePage;

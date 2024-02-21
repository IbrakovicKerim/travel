import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TravelDetailPage = () => {
  const { id } = useParams();
  const [travel, setTravel] = useState(null);

  // Simulacija dohvata podataka o određenom putovanju
  useEffect(() => {
    // Ovdje bi trebalo pozvati API za dohvat podataka o putovanju s odgovarajućim ID-om
    // Na primjer:
    // const travelData = await getTravelById(id);
    const travelData = { id: id, destination: "Paris", date: "2023-08-15" };
    setTravel(travelData);
  }, [id]);

  return (
    <div>
      <h2>Detalji putovanja</h2>
      {travel && (
        <div>
          <p>Destinacija: {travel.destination}</p>
          <p>Datum: {travel.date}</p>
          {/* Dodatni detalji o putovanju */}
        </div>
      )}
    </div>
  );
};

export default TravelDetailPage;

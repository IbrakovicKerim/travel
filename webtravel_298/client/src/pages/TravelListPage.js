import React from 'react';

const TravelListPage = () => {
  // Ovdje možete koristiti neki state management (npr. Context API ili Redux) da biste dobili podatke o listi putovanja
  const travels = [
    { id: 1, destination: 'Pariz', date: '2023-08-15' },
    { id: 2, destination: 'London', date: '2023-10-20' },
    // Ostala putovanja...
  ];

  return (
    <div>
      <h2>Lista putovanja</h2>
      <ul>
        {travels.map((travel) => (
          <li key={travel.id}>{travel.destination} - {travel.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default TravelListPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Pretpostavljam korištenje Axios-a za API pozive

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [travels, setTravels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dohvat podataka o korisniku
    axios.get('/api/user') // Zamijeniti s pravim endpointom za dohvat podataka o korisniku
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Greška prilikom dohvata podataka o korisniku:', error);
        setLoading(false);
      });

    // Dohvat historije putovanja korisnika
    axios.get('/api/travels/history') // Zamijeniti s pravim endpointom za dohvat historije putovanja
      .then(response => {
        setTravels(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Greška prilikom dohvata historije putovanja:', error);
        setLoading(false);
      });
  }, []); // Prazna lista ovisnosti znači da će se useEffect izvršiti samo jednom, nakon montiranja komponente

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profil korisnika</h2>
      <div>
        <strong>Ime: </strong> {user.name}
      </div>
      <div>
        <strong>Email: </strong> {user.email}
      </div>
      {/* Ostali detalji o korisniku */}
      
      <h2>Historija putovanja</h2>
      <ul>
        {travels.map(travel => (
          <li key={travel.id}>
            <div>
              <strong>Naziv putovanja: </strong> {travel.title}
            </div>
            <div>
              <strong>Datum putovanja: </strong> {travel.date}
            </div>
            {/* Dodajte ostale detalje o putovanjima */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfilePage;

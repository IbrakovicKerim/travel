import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [travels, setTravels] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user', isActive: true });
  const [newTravel, setNewTravel] = useState({ destination: '', category: '', departureDate: '', duration: '' });

  useEffect(() => {
    // Učitavanje svih korisnika i putovanja sa servera prilikom prvog rendera
    loadUsers();
    loadTravels();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  const loadTravels = async () => {
    try {
      const response = await axios.get('/api/travels');
      setTravels(response.data);
    } catch (error) {
      console.error('Error loading travels:', error);
    }
  };

  const addUser = async () => {
    try {
      await axios.post('/api/users', newUser);
      setNewUser({ name: '', email: '', role: 'user', isActive: true });
      loadUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const addTravel = async () => {
    try {
      await axios.post('/api/travels', newTravel);
      setNewTravel({ destination: '', category: '', departureDate: '', duration: '' });
      loadTravels();
    } catch (error) {
      console.error('Error adding travel:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const deleteTravel = async (travelId) => {
    try {
      await axios.delete(`/api/travels/${travelId}`);
      loadTravels();
    } catch (error) {
      console.error('Error deleting travel:', error);
    }
  };

  return (
    <div>
      <h2>Administracija korisnika</h2>
      <form onSubmit={addUser}>
        <input type="text" placeholder="Ime" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
        <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Dodaj korisnika</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Obriši</button>
          </li>
        ))}
      </ul>

      <h2>Administracija putovanja</h2>
      <form onSubmit={addTravel}>
        <input type="text" placeholder="Destinacija" value={newTravel.destination} onChange={(e) => setNewTravel({ ...newTravel, destination: e.target.value })} />
        <input type="text" placeholder="Kategorija" value={newTravel.category} onChange={(e) => setNewTravel({ ...newTravel, category: e.target.value })} />
        <input type="date" placeholder="Datum polaska" value={newTravel.departureDate} onChange={(e) => setNewTravel({ ...newTravel, departureDate: e.target.value })} />
        <input type="text" placeholder="Trajanje" value={newTravel.duration} onChange={(e) => setNewTravel({ ...newTravel, duration: e.target.value })} />
        <button type="submit">Dodaj putovanje</button>
      </form>
      <ul>
        {travels.map(travel => (
          <li key={travel.id}>
            {travel.destination} - {travel.category} - {travel.departureDate} - {travel.duration}
            <button onClick={() => deleteTravel(travel.id)}>Obriši</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;

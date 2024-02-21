import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ user }) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        {user && <li><NavLink to="/travels">Travels</NavLink></li>}
        {user && user.role === 'admin' && (
          <li><NavLink to="/admin">Admin Dashboard</NavLink></li>
        )}
        {!user && <li><NavLink to="/login">Login</NavLink></li>}
        {!user && <li><NavLink to="/register">Register</NavLink></li>}
        {user && <li><NavLink to="/profile">Profile</NavLink></li>}
        {user && <li><button onClick={handleLogout}>Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Navigation;

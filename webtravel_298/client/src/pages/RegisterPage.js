import React, { useState } from 'react';

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Registration logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input
          type="text"
          value={userData.username}
          onChange={(e) => setUserData({...userData, username: e.target.value})}
        />
      </label>
      <label>Email:
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({...userData, email: e.target.value})}
        />
      </label>
      <label>Password:
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({...userData, password: e.target.value})}
        />
      </label>
      <label>Confirm Password:
        <input
          type="password"
          value={userData.confirmPassword}
          onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;

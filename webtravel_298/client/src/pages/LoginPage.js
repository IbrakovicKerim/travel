import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Login logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input
          type="text"
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        />
      </label>
      <label>Password:
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;

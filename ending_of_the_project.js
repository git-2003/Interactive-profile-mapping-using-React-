import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/admin">Admin Panel</Link>
    </nav>
  );
};

export default NavBar;

// Include the NavBar in the main file.
import NavBar from './components/NavBar';

// Inside the return block of App.js
<NavBar />
//to the run the project
npm start

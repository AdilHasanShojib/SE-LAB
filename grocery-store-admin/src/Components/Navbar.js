import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/style.css';

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <p>Grocery Store</p>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/fruits">Fruits</Link></li>
            <li><Link to="/vegetables">Vegetables</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="" />
          <button onClick={handleSearchClick}>Search</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

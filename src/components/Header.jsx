import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img 
          src="https://www.mdlcv.org/wp-content/uploads/2021/11/MDLCV_Logo1_S_GreenBlueS.png" 
          alt="MDLCV Logo" 
          className="logo" 
        />
      </div>
      <nav className="nav">
        <NavLink to="/home" className="nav-link" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/hr" className="nav-link" activeclassname="active">
          Employee Handbook / HR
        </NavLink>
        <NavLink to="/branding" className="nav-link" activeclassname="active">
          Branding & Logo Usage
        </NavLink>
        <NavLink to="/communications" className="nav-link" activeclassname="active">
          Communications
        </NavLink>
        <NavLink to="/events" className="nav-link" activeclassname="active">
          Calendar & Events
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <ul className="nav-ul">
        <div className="nav-left">
          <li className="nav-item">
            <Link to="/home" className='nav-link'>
              <button className="nav-button">Home</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className='nav-link'>
              <button className="nav-button">Courses Details</button>
            </Link>
          </li>
        </div>
        <div className="nav-right">
          <li className="nav-item">
            <Link to="/adduser" className='nav-link'>
              <button className="nav-button">Add course</button>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Nav;

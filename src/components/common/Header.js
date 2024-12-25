// src/components/common/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/admin/companies">Company Management</Link></li>
          <li><Link to="/admin/methods">Communication Methods</Link></li>
          <li><Link to="/user/dashboard">Dashboard</Link></li>
          <li><Link to="/user/notifications">Notifications</Link></li>
          <li><Link to="/user/calendar">Calendar</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

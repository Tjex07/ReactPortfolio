import React from 'react';
import '../css/nav.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div id="nav">
    <div class="nav1">
      
    </div>
    <div class="nav2">
    <ul>
      <li>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'active' : 'inactive'}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'active' : 'inactive'}
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'active' : 'inactive'}
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'active' : 'inactive'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  </div>
  );
}

export default NavTabs;

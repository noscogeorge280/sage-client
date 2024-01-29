import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar';

const Header = ({ onSearch }) => {
  return (
    <div>
      <header class="p-3 mb-3 border-bottom">
      <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <a class="navbar-brand" href="#">Star Wars App</a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Link  class="nav-link px-2 link-secondary" to="/">Home</Link>

              <Link class="nav-link px-2 link-body-emphasis" to="/favorites">Favorites</Link>

            </ul>
            <SearchBar class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" onSearch={onSearch} />
            
          </div>
        </div>
      </header>
      
    </div>
  );
};

export default Header;

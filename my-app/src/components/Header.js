import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="https://i.ibb.co/6PFGtMP/KENNY-HOME-SOLUTIONS-removebg-preview.png" className="topnav" alt="Kenny Homes" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navbar-collapse collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav justify-content-center flex-grow-1">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" onClick={closeMenu}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProductPage" onClick={closeMenu}>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services" onClick={closeMenu}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Resources" onClick={closeMenu}>Resources</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ClientelsPage" onClick={closeMenu}>Clientele</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
            <div className="d-flex justify-content-end">
              <img src="https://thekidszone.in/wp-content/uploads/2019/06/contact-gif.gif" className="phone-logo" style={{width:'50px'}} alt="..." />
              <p className="number-para">+91-8077748721</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

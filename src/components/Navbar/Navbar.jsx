/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logoCtc from '../../assets/logo.png';

import './navbar.scss';

const Navbar = () => (
  <nav className="container-navbar" aria-labelledby="menu-navigation">
    <ul className="content-navbar">
      <li className="navbar-item">
        <a href="#" className="navbar-link navbar-link-text">Nosotros</a>
      </li>
      <li className="navbar-item">
        <a href="#" className="navbar-link navbar-link-text">Beneficios</a>
      </li>
      <li className="navbar-item">
        <a href="#" className="navbar-link">
          <img src={logoCtc} width="85" height="56" alt="logo Crack The Code" />
        </a>
      </li>
      <li className="navbar-item">
        <a href="#" className="navbar-link navbar-link-text">Contacto</a>
      </li>
      <li className="navbar-item">
        <a href="#" className="navbar-link navbar-link-text">Blog</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;

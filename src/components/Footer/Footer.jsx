/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logoCtc from '../../assets/logo.png';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-column">
          <img src={logoCtc} alt="logo Crack The Code" width="25" height="96" />
        </div>
        <div className="footer-column">
          <h4>Nuestras Redes Sociales</h4>
          <div className="social-links">
            <a href="#"><img alt="icono instagram" src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" /></a>
            <a href="#"><img alt="icono facebook" src="https://img.icons8.com/ios-filled/50/000000/facebook--v1.png" /></a>
            <a href="#"><img alt="icono linkedin" src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" /></a>
            <a href="#"><img alt="icono tiktok" src="https://img.icons8.com/ios-filled/50/000000/tiktok--v1.png" /></a>
          </div>
        </div>
        <div className="footer-column">
          <h4>¡MIRA LOS CURSOS PARA TU HIJO!</h4>
          <ul>
            <li><a href="#">Todos los Cursos</a></li>
            <li><a href="#">Cursos para crear videojuegos</a></li>
            <li><a href="#">Cursos para super programadores</a></li>
            <li><a href="#">Cursos de diseño y creatividad</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CURSOS POPULARES</h4>
          <ul>
            <li><a href="#">Programación en Python</a></li>
            <li><a href="#">Desarrollo de videojuegos</a></li>
            <li><a href="#">Edición de videos</a></li>
            <li><a href="#">Aprender con Minecraft</a></li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;

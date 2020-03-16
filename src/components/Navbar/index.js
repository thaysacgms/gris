import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <div id="menu">
      <div>
      <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
      </div>
      <div>
      <Link to="/" className="menu-options">Início</Link>
      <Link to="/quemsomos" className="menu-options">Quem somos</Link>
      <Link to="/acoes" className="menu-options">Ações</Link>
      <Link to="/calendario" className="menu-options">Calendário</Link>
      <Link to="/contribuir" className="menu-options doar">Quero contribuir</Link>
      </div>
    </div>
  );
}

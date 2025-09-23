import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">BICIADOS</a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login">Crear Cuenta</a>
            </li>
          </ul>
        </div>
          <div>
            <i class="fa-solid fa-circle-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
      </div>
    </nav>
  );
};

export default Header;
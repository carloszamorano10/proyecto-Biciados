import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand m-2 fs-1" href="#home">BICIADOS</a>
        
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
              <a className="nav-link fs-3 mx-2" href="#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-3 mx-2" href="#features">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-3 mx-2" href="#login">Crear Cuenta</a>
            </li>
          </ul>
        </div>
          <div>
            <i class="fa-solid fa-circle-user m-2 p-2"></i>
            <i class="fa-solid fa-cart-shopping m-2 p-2"></i>
          </div>
      </div>
    </nav>
  );
};

export default Header;
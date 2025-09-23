import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="d-flex justify-content-center m-5 p-5">
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <h3>Iniciar Sesión</h3>
        <hr />
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="pass"
            name="pass"
            value={formData.pass}
            onChange={handleChange}
          />
        </div>
        <hr />
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <a href="#" className="text-dark text-decoration-none fs-6 fw-light">
            ¿Olivdaste tu contraseña?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;

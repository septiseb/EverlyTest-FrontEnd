import React, { useState } from "react";
import NavBarHome from "./NavBarHome";
import AUTH_SERVICE from "../auth/auth";

export default function SignUp({ getUser }) {
  const [state, setState] = useState({
    position: "Analista de Reclutamiento",
    sector: "Farma",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const signUpAx = await AUTH_SERVICE.signup(state);
      getUser(signUpAx);
      setState({});
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value });
  };

  return (
    <>
      <NavBarHome />
      <div className="container-login">
        <div className="row m-0 h-100">
          <div className="col p-0 text-center d-flex justify-content-center align-items-center display-none">
            <img
              src="../../images/signup-background.png"
              className="w-100 image-login"
              alt="signup"
            />
          </div>
          <div className="col p-0 bg-custom d-flex justify-content-center align-items-center flex-column w-100">
            <h1 style={{ color: "white", marginTop: "50px" }}>Registrarse</h1>
            <form
              className="w-75"
              action="/signup"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Nombre
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={state.name}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput12"
                  name="name"
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">
                  Apellido
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={state.lastName}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput4"
                  name="lastName"
                  placeholder="Apellido"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput5" className="form-label">
                  Correo
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="email"
                  value={state.email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}"
                  className="form-control"
                  id="exampleFormControlInput6"
                  name="email"
                  placeholder="Correo"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput7" className="form-label">
                  Empresa
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={state.company}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput8"
                  name="company"
                  placeholder="Nombre de la Empresa"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput9" className="form-label">
                  Sector
                </label>
                <select
                  name="sector"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Educación</option>
                  <option>Agricultura y Ganadería</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput10" className="form-label">
                  Puesto
                </label>
                <select
                  name="position"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Analista de Reclutamiento</option>
                  <option>Gerente de RH</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                  Contraseña
                </label>
                <input
                  value={state.password}
                  onChange={(e) => handleChange(e)}
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput2"
                  name="password"
                  placeholder="*********"
                />
              </div>
              <button
                type="submit"
                className="btn btn-custom btn-lg btn-block mt-3 btn-crear-cuenta"
              >
                Crear Cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

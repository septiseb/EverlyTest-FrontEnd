import React, { useState, useContext } from "react";
import NavBarHome from "./NavBarHome";
import AUTH_SERVICE from "../auth/auth";
import AuthContext from "../../context/auth/AuthContext"

export default function LogIn({ getUser }) {
  const ctx = useContext(AuthContext);
  const [state, setState] = useState({});

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const signUpAx = await AUTH_SERVICE.login(state);
      getUser(signUpAx.data);
      setState({});
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <>
      <NavBarHome />

      <div className="container-login">
        <div className="row m-0 h-100">
          <div className="col p-0 text-center d-flex justify-content-center align-items-center display-none">
            <img
              src="../../images/login-backgroun.png"
              className="w-100 image-login"
              alt="login"
            />
          </div>
          <div className="col p-0 bg-custom d-flex justify-content-center align-items-center flex-column w-100">
            <h1 style={{ color: "white", marginTop: "50px" }}>
              Iniciar Sesion
            </h1>
            <form
              className="w-75"
              action="/login"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Correo
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  placeholder="Correo"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">
                  Contraseña
                </label>
                <input
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
                className="btn btn-custom btn-lg btn-block mt-3"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

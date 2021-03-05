import React from "react";
import NavBarHome from "./NavBarHome";

export default function TestLog() {
  return (

    <>
<NavBarHome/>

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
            <h1 style={{ color: "white", marginTop: "50px" }}>Aplicante</h1>
            <form className="w-75" action="/login-tester" method="POST">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Correo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  placeholder="Correo"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">
                  Código
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  name="code"
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

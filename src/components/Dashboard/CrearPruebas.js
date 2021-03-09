import React, { useContext, useState } from "react";
import { Redirect, useHistory } from "react-router";
import INFO_USER from "../../components/services/user";
import AuthContext from "../../context/auth/AuthContext";

export default function CrearPruebas() {
  const ctx = useContext(AuthContext);
  const history = useHistory();
  const [state, setState] = useState({ user: ctx.token });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const submitChange = async (event) => {
    event.preventDefault();
    try {
      console.log(state);
      const createTest = await INFO_USER.createTest(state);
      history.push(`/user-profile/${ctx.token}/create-test/${createTest.data}`);
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <>
      <div class="container-login" style={{ display: "flex" }}>
        <div class="col p-0 bg-custom d-flex justify-content-center align-items-center flex-column w-100">
          <form
            class="w-75"
            action="/user-profile/create-test"
            method="POST"
            onSubmit={submitChange}
          >
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Nombre de la Evaluación
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="name"
                placeholder="Nombre"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput2" class="form-label">
                Nombre de la vacante
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="namePosition"
                placeholder="Vacante"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput2" class="form-label">
                Departamento
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="department"
                placeholder="Departamento"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput2" class="form-label">
                Descripción de la Vacante
              </label>
              <textarea
                onChange={(e) => handleChange(e)}
                class="form-control"
                name="positionDescription"
                id=""
                cols="20"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-custom btn-lg btn-block mt-3">
              Crear
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

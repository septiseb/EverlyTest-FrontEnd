import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import INFO_USER from "../../components/services/user";
import AuthContext from "../../context/auth/AuthContext";

export default function CrearPruebas() {
  const ctx = useContext(AuthContext);
  const history = useHistory();
  const [state, setState] = useState({ user: ctx.userToken || ctx.usuario });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const submitChange = async (event) => {
    event.preventDefault();
    try {
      console.log(state);
      const createTest = await INFO_USER.createTest(state);
      history.push(`/user-profile/create-test/${createTest.data}`);
      return;
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <>
      <div className="container-login mx-16 " >
        <div className="col p-0 bg-custom d-flex justify-content-center align-items-center flex-column w-100">
          <form
            onSubmit={submitChange}
            className="form bg-white p-6 my-10 relative"
          >
            <div
              className="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
              style={{ left: "-40px" }}
            >
              <i className="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i>
            </div>
            <h3 className="text-2xl text-gray-900 font-semibold">Crea tu Prueba</h3>
            <p className="text-gray-600"> Ingresa la siguiente información:</p>
            <div className="flex space-x-5 mt-3">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="exampleFormControlInput1"
                name="name"
                placeholder="Nombre de la evaluación"
                className="border p-2  w-1/2"
              />
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                id="exampleFormControlInput1"
                name="namePosition"
                placeholder="Nombre de la vacante"
                className="border p-2 w-1/2"
              />
            </div>
            <input
              type="text"
              id="exampleFormControlInput1"
              name="department"
              placeholder="Departamento"
              className="border p-2 w-full mt-3"
            />
            <textarea
              onChange={(e) => handleChange(e)}
              name="positionDescription"
              id=""
              cols="20"
              rows="5"
              placeholder="Ingresar descripción de la vacante"
              className="border p-2 mt-3 w-full"
            ></textarea>
            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
            >
              Crear
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

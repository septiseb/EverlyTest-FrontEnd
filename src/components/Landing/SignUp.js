import React, { useState } from "react";
import NavBarHome from "./NavBarHome";
import AUTH_SERVICE from "../services/auth";
import { Redirect, useHistory } from "react-router";

const positionArray = [
  "Analista de Reclutamiento",
  "Gerente de RH",
  "Reclutador Jr",
  "Recultador Sr",
  "Otros",
];
const sectorArray = [
  "Educación",
  "Agricultura y Ganadería",
  "Legal",
  "Alimentos",
  "Comercio",
  "Construcción",
  "Energía y Agua",
  "Seguros",
  "Hosteleria y Turismo",
  "Tecnología",
  "Telecomunicaciones",
  "Transporte",
  "Automotriz",
  "Otros",
];

export default function SignUp() {
  const history = useHistory();
  const [state, setState] = useState({
    position: "Analista de Reclutamiento",
    sector: "Educación",
  });
  const [error, setError] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await AUTH_SERVICE.signup(state);
      setState({
        position: "Analista de Reclutamiento",
        sector: "Educación",
      }); 
      history.push("/login");
    } catch (e) {
      setError(e.response.data);
    }
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <>
      <NavBarHome />
      <div className="mx-auto max-w-6xl p-12">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 max-w-md flex flex-col justify-center">
            <div className="md:text-4xl text-xl font-black uppercase">
             Utiliza nuestra herramienta para filtrar los mejores candidatos para la posición.
            </div>
          </div>
          <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2 ">
            <div className="shadow-md flex-auto max-w-sm p-10 pb-20">
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Nombre
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  <input
                    onChange={(e) => handleChange(e)}
                    value={state.name}
                    type="text"
                    id="exampleFormControlInput12"
                    name="name"
                    placeholder="Nombre"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />{" "}
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Apellido
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  {" "}
                  <input
                    onChange={(e) => handleChange(e)}
                    value={state.lastName}
                    type="text"
                    id="exampleFormControlInput4"
                    name="lastName"
                    placeholder="Apellido"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />{" "}
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Email
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  {" "}
                  <input
                    onChange={(e) => handleChange(e)}
                    type="email"
                    value={state.email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}"
                    id="exampleFormControlInput6"
                    name="email"
                    placeholder="Correo"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />{" "}
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Empresa
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  {" "}
                  <input
                    onChange={(e) => handleChange(e)}
                    value={state.company}
                    type="text"
                    id="exampleFormControlInput8"
                    name="company"
                    placeholder="Nombre de la Empresa"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />{" "}
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Sector
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  {" "}
                  <select
                    name="sector"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    onChange={(e) => handleChange(e)}
                  >
                    {sectorArray.map((sec, id) => (
                      <option key={id}>{sec}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Puesto
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  {" "}
                  <select
                    name="position"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    onChange={(e) => handleChange(e)}
                  >
                    {positionArray.map((pos, id) => (
                      <option key={id}>{pos}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Contraseña
                </div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  {" "}
                  <input
                    value={state.password}
                    onChange={(e) => handleChange(e)}
                    type="password"
                    id="exampleFormControlInput2"
                    name="password"
                    placeholder="*********"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />{" "}
                </div>
              </div>
              <div>
                <p>
                  {" "}
                  {error ? (
                    <p className="text-red-600">{error.errorMessage}</p>
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className="mt-6 relative">
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="shadow-md font-medium py-2 px-4 text-blue-600 hover:text-blue-300
                  cursor-pointer bg-teal-600 rounded text-lg tr-mt  absolute text-center w-full"
                >
                  Crear Cuenta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

import React, { useState } from "react";
import NavBarHome from "../Landing/NavBarHome";
import TESTER_INFO from "../services/tester";
import { useHistory } from "react-router";

export default function TestLog() {
  const [state, setState] = useState({
    email: "",
    code: "",
  });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const submitCheck = async (event) => {
    event.preventDefault();
    if (!state.email || !state.code) {
      setError("Todos los campo son obligatorios");
      return;
    }

    try {
      const findEmail = await TESTER_INFO.checkTester(state);
      const idEmail = findEmail.data;
      setError("");
      await history.push(`/tester/${idEmail}`);
    } catch (e) {
      setError(e.response.data.errorMessage);
    }
  };

  return (
    <>
      <NavBarHome />
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="/">Bienvenido</a>
            </div>
            <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
              EverlyTest, te da la bienvenida en donde podras acceder a la
              prueba que la empresa hizo para ti. Para entrar introducir el
              correo compartido de la compañia y su código de acceso.
            </p>
            <p className="mt-6 text-sm text-center text-gray-300">
              Read our{" "}
              <a href="/" className="underline">
                terms
              </a>{" "}
              and{" "}
              <a href="/" className="underline">
                conditions
              </a>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Aplicante
            </h3>
            <form
              onSubmit={(e) => submitCheck(e)}
              className="flex flex-col space-y-5"
            >
              <div className="flex flex-col space-y-1">
                <label
                  for="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Correo
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={state.email}
                  type="text"
                  id="exampleFormControlInput1"
                  name="email"
                  placeholder="Correo"
                  autofocus
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Código
                  </label>
                </div>
                <input
                  onChange={(e) => handleChange(e)}
                  value={state.code}
                  type="text"
                  id="exampleFormControlInput2"
                  name="code"
                  placeholder="*********"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Iniciar Prueba
                </button>
                <div className="text-sm text-red-600 hover:underline focus:text-blue-800">
                  {error}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

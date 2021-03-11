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
      <div className="flex items-center my-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Aplicante
              </h1>

              <p className="text-gray-500 dark:text-gray-400">
                Bienvenido Aplicante listo para tu prueba!
              </p>
            </div>

            <div className="m-7">
              <form onSubmit={(e) => submitCheck(e)}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Correo
                  </label>

                  <input
                    onChange={(e) => handleChange(e)}
                    value={state.email}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    placeholder="Correo"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
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
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="text-red-400 ">{error}</div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import INFO_USER from "../../components/services/user";
import AuthContext from "../../context/auth/AuthContext";

export default function HomeDash() {
  const [createdTest, setCreatedTest] = useState([]);
  const ctx = useContext(AuthContext);

  const eraseTest = async (event, id) => {
    event.preventDefault();
    let confirmErase = window.confirm("Estas seguro de borrar el Examen");
    if (confirmErase) {
      try {
        await INFO_USER.eraseTest(id);
        setCreatedTest([...createdTest.filter((test) => test._id !== id)]);
      } catch (e) {
        console.log(e);
      }
    }
    return;
  };

  useEffect(() => {
    const getTest = async () => {
      try {
        const textAxios = await INFO_USER.getTest(ctx.token);
        setCreatedTest(textAxios.data);
      } catch (e) {
        console.log(e.response.data);
      }
    };
    getTest();
  }, []);

  return (
    <>
      <nav style={{ backgroundColor: "#4f46E6" }} className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
              <div className="flex justify-between">
                <div>
                  <p className="text-white block py-2 text-base text-lg">
                    Bienvenido
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-white ml-500">
                    <form action="/logout" method="POST">
                      <button type="submit">Cerrar Sesion</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>

        <div className="hidden sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </a>
          </div>
        </div>
      </nav>

      <div className="m-3">
        <button className="text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-800 hover:bg-green-300 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
          </svg>
          <Link
            to={`/user-profile/${ctx.token}/create-test`}
            className="ml-2"
            href="/user-profile/create-test"
            style={{ color: "black" }}
          >
            Crear Pruebas
          </Link>
        </button>
      </div>

      {createdTest.map((test, id) => {
        return (
          <>
            <div
              key={id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-6"
            >
              <div className="grid grid-cols-12 gap-3">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  className="col-span-0 sm:col-span-2 text-center hidden sm:block"
                >
                  <div className="grid grid-rows-2">
                    <div className="inline-block font-medium text-xl">
                      {test.testerEmail.length}
                    </div>

                    <div className="inline-block font-medium text-sm">
                      {test.testerEmail.length === 1
                        ? "Aplicante"
                        : "Aplicantes"}
                    </div>
                  </div>
                  <div className="inline-block font-medium text-2xl text-white">
                    {/*  {{answer this.testerEmail}} */}
                  </div>

                  <div className="inline-block font-medium text-white mx-1 text-sm lg:text-md">
                    Contestados
                  </div>

                  <div className="grid my-3">
                    <span className="inline-block font-bold text-xs">
                      Promedio: {/* {{average this.testerEmail}} */}
                    </span>
                  </div>
                </div>

                <div className="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
                  <div className="grid block sm:hidden">
                    <div className="flex flex-wrap">
                      <div className="mr-2">
                        <div className="inline-block font-light capitalize">
                          <i className="uil uil-arrow-circle-up mr-1"></i>
                          <span className="text-sm">
                            {test.testerEmail.length === 1
                              ? "Aplicante"
                              : "Aplicantes"}
                          </span>
                        </div>
                      </div>
                      <div className="mr-2">
                        <div className="inline-block font-light capitalize">
                          <i className="uil uil-check-circle mr-1"></i>
                          <span className="text-sm">0 Contestados</span>
                        </div>
                      </div>
                      <div className="mr-2">
                        <div className="inline-block">
                          <i className="uil uil-eye mr-1"></i>
                          <span className="text-sm capitalize font-light">
                            Promedio: 35.0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <p
                      href="#"
                      className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold"
                    >
                      {test.name}
                    </p>

                    <p className="mt-2 text-gray-600 text-sm md:text-md">
                      {test.positionDescription}
                    </p>
                    <div>
                      <p className="mt-2 text-gray-600 text-sm md:text-md inline-block">
                        <strong>Posición:</strong> {test.namePosition}
                      </p>
                      <p
                        style={{ marginLeft: "50px" }}
                        className="mt-2 text-gray-600 text-sm md:text-md inline-block"
                      >
                        <strong>Departamento:</strong> {test.department}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ paddingTop: "2px", paddingBottom: "0" }}
                    className="display row py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                  >
                    <p className="mt-2 text-gray-600 text-sm md:text-md inline-block">
                      <strong>Pruebas a Aplicar:</strong>
                    </p>
                    <ul
                      style={{ alignItems: "baseline" }}
                      className="flex flex-row display row list-disc space-y-2"
                    >
                      {/*           {{#each test}}
          <li className="flex flex-row w-auto">
            <div className="flex">
              <span className="h-6 flex items-center sm:h-7">
                <svg className="flex-shrink-0 h-4 w-4 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              <p className="ml-2">
                <code className="margin-text-sm font-bold text-gray-900">{{this.name}}</code>
              </p>
            </div>
          </li>
          {{/each }} */}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 mt-4 my-auto">
                    <div className="col-span-12 lg:col-span-8">
                      <Link
                        style={{ backgroundColor: "#0d6efd" }}
                        to={`/user-profile/details/${test._id}`}
                        className="inline-block  text-white 
                            bg-blue-400 hover:bg-blue-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                      >
                        Detalle
                      </Link>
                      <Link
                        to={`/user-profile/edit-test/${test._id}`}
                        className="inline-block  text-white 
                            bg-green-400 hover:bg-green-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                      >
                        Editar
                      </Link>
                      <form className="inline-block" method="DELETE">
                        <button
                          onClick={(e) => eraseTest(e, test._id)}
                          className="inline-block  text-white 
                            bg-red-400 hover:bg-red-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                          type="submit"
                          style={{ backgroundColor: "red" }}
                        >
                          Eliminar
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

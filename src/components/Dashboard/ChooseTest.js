import React, { useEffect, useState } from "react";
import {useHistory, useParams } from "react-router";
import INFO_USER from "../services/user";

export default function ChooseTest() {
  const [tests, setTests] = useState([]);
  const [addTest, setAddTest] = useState([]);
  const history = useHistory();

  const { idGroupTest } = useParams();

  const saveTest = async (e) => {
    e.preventDefault();
    try {
      await INFO_USER.addIDToTest(idGroupTest, addTest);
      history.push(`/user-profile`)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTests = async () => {
      try {
        const testAxios = await INFO_USER.AllTest();
        setTests(testAxios.data);
      } catch (e) {
        console.log(e);
      }
    };
    getTests();
  }, []);

  const agregarTest = (id) => {
    setAddTest([...new Set([...addTest, id])]);
  };

  const borrarTest = (id) => {
    const newArray = addTest.filter((test) => test !== id);
    setAddTest([...newArray]);
  };

  console.log(addTest);

  return (
    <div>
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
                    <a href="/user-profile">Regresar</a>
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
      <div style={{ paddingBottom: "20px" }} className="flex items-center my-2">
        <div className="m-3">
          <button
            onClick={(e) => saveTest(e)}
            className="text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-800 hover:bg-blue-300 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
            </svg>
            <a className="ml-2" href="/user-profile" style={{ color: "black" }}>
              Guardar
            </a>
          </button>
        </div>
        <div className="flex justify-center items-center w-full">
          <h1 style={{ marginRight: "350px", fontSize: "30px" }}>
            <strong>INTRODUCIR NOMBRE DEL TEST</strong>
          </h1>
        </div>
      </div>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        method="POST"
        action="/user-profile/create-test/{{this.groupTest._id}}"
      >
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="mb-3"
        >
          <input
            style={{ textAlign: "center", width: "50%" }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="testerEmail"
            placeholder="Agregar correo del aplicante"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}"
          />
          <button
            style={{ width: "20%", marginLeft: "10px" }}
            type="submit"
            className="btn btn-primary"
          >
            Agregar
          </button>
        </div>
      </form>

      <section className="py-1">
        <div className="flex container mx-auto">
          <div
            style={{ justifyContent: "space-evenly" }}
            className="flex flex-wrap px-6"
          >
            {tests.map((test, id) => {
              return (
                <div
                  style={{
                    width: "400px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignContent: "space-between",
                  }}
                  key={id}
                  className="w-full lg:w-1/2  md:px-4 lg:px-6 py-3"
                >
                  <div className="bg-white hover:shadow-xl border-red-900">
                    <div className="">
                      <img
                        src="../{{this.url}}"
                        alt=""
                        className="h-56 w-full border-white border-8 hover:opacity-25"
                      />
                    </div>
                    <div className="px-4 py-4 md:px-10">
                      <h1 className="font-bold text-lg">{test.name}</h1>
                      <p className="py-4">{test.description}</p>
                      <div
                        style={{ justifyContent: "space-evenly" }}
                        className="flex pt-8"
                      >
                        <div className="w-full md:w-1/3 text-sm font-medium">
                          {test.duration} minutos
                        </div>
                        <div className="2/3">
                          <div className="text-sm font-medium">
                            {addTest.includes(test._id) ? (
                              <button
                                className="bg-red-600"
                                onClick={() => borrarTest(test._id)}
                              >
                                Borrar
                              </button>
                            ) : (
                              <button
                                className="bg-green-600"
                                onClick={() => agregarTest(test._id)}
                              >
                                Agregar
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

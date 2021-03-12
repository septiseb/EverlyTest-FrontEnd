import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import INFO_USER from "../services/user";
import NavBarUser from "./NavBarUser";
import SendEmail from "./SendEmail";

export default function ChooseTest() {
  const [tests, setTests] = useState([]);
  const [addTest, setAddTest] = useState([]);
  const [error, setError] = useState("");

  const history = useHistory();

  const { idGroupTest } = useParams();

  const saveTest = async (e) => {
    e.preventDefault();
    try {
      await INFO_USER.addIDToTest(idGroupTest, addTest);
      history.push(`/user-profile`);
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

  return (
    <div>
      <NavBarUser />

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
          <h1
            style={{ marginRight: "350px", fontSize: "30px" }}
            className="text-5xl"
          >
            <strong>Escoge tus pruebas</strong>
          </h1>
        </div>
      </div>

      <SendEmail id={idGroupTest} />

      <section className="py-1">
        <div className="flex container mx-auto">
          <div
            style={{ justifyContent: "space-evenly" }}
            className="flex flex-wrap px-6 my-1"
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
                  <div
                    className="bg-white hover:shadow-xl border-red-900"
                    style={{
                      border: "2px solid #5DB7FE",
                    }}
                  >
                    <div className="">
                      <img
                        src={test.url}
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
                                className="bg-red-600 px-4 py-1"
                                onClick={() => borrarTest(test._id)}
                              >
                                Borrar
                              </button>
                            ) : (
                              <button
                                className="bg-green-600 px-4 py-1"
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

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import INFO_USER from "../services/user";
import NavBarUser from "./NavBarUser";
import SendEmail from "./SendEmail";

export default function EditTest() {
  const [tests, setTests] = useState([]);
  const [testAdded, setTestAdded] = useState({ test: [] });
  const history = useHistory();

  const { idGroupTest } = useParams();

  const saveTest = async (e) => {
    e.preventDefault();
    const testsID = { test: [...testAdded.test.map((t) => t._id)] };
    try {
      await INFO_USER.editIDToTest(idGroupTest, testsID);
      history.push(`/user-profile`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTests = async () => {
      try {
        const testAxios = await INFO_USER.getExamAndIdTest(idGroupTest);
        const resTest = testAxios.data;
        const testAllAxios = await INFO_USER.AllTest();
        const filterTest = testAllAxios.data.filter(
          (test) => !resTest.test.map((t) => t._id).includes(test._id)
        );
        setTests(filterTest);
        setTestAdded(resTest);
      } catch (e) {
        console.log(e);
      }
    };
    getTests();
  }, []);

  const agregarTest = (id) => {
    const filterTest = tests.filter((test) => test._id === id);
    setTestAdded({ ...testAdded, test: [...testAdded.test, ...filterTest] });
    setTests([...tests.filter((test) => !(test._id === id))]);
  };

  const borrarTest = (id) => {
    const filterTest = testAdded.test.map((t) => t).filter((t) => t._id === id);
    setTests([...tests, ...filterTest]);
    setTestAdded({
      ...testAdded,
      test: [...testAdded.test.filter((t) => t._id !== id)],
    });
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
          <h1 style={{ marginRight: "350px", fontSize: "30px" }}>
            <strong>INTRODUCIR NOMBRE DEL TEST</strong>
          </h1>
        </div>
      </div>

      <SendEmail id={idGroupTest} />

      <section className="py-1">
        <div className="flex container mx-auto">
          <div
            style={{ justifyContent: "space-evenly" }}
            className="flex flex-wrap px-6"
          >
            {testAdded.test.map((test, id) => {
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
                    <h1>Estos Test ya estan agregados</h1>
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
                            <button
                              className="bg-red-600"
                              onClick={() => borrarTest(test._id)}
                            >
                              Quitar
                            </button>
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
                    <h1>Estos Test no estan agregados</h1>
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
                            <button
                              className="bg-green-600"
                              onClick={() => agregarTest(test._id)}
                            >
                              Agregar
                            </button>
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

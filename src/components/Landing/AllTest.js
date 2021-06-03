import React, { useEffect, useState } from "react";
import NavBarHome from "./NavBarHome";
import INFO_USER from "../services/user";

export default function AllTest() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const getTests = async () => {
      const testAxios = await INFO_USER.AllTest();
      setTests(testAxios.data);
    };
    getTests();
  }, []);

  return (
    <>
      <NavBarHome />

      <section
        className="py-2 text-center container"
        style={{ paddingBottom: "50px" }}
      >
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light" style={{ fontSize: "50px" }}>
              EverlyTest
            </h1>
          </div>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="my-2"
        >
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="mb-3"
          >
            <input
              style={{
                textAlign: "center",
                width: "50%",
                border: "1px solid black",
                borderRadiu: "2%",
              }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="position"
              placeholder="Buscar la posicion que quieres cubrir, herramientas o pruebas para tus candidatos"
            />
            <button
              style={{ width: "7%", marginLeft: "10px", fontWeight: "bolder" }}
              type="submit"
              className="btn btn-primary bg-blue-400 ring-indigo-300 h-7"
            >
              Buscar
            </button>
          </div>
        </form>
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
                  key={id}
                  style={{
                    width: "400px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignContent: "space-between",
                  }}
                  className="w-full lg:w-1/2  md:px-4 lg:px-6 py-3 border-black-900 my-2"
                >
                  <div
                    className="bg-white hover:shadow-xl border-red-900"
                    style={{
                      border: "2px solid #5DB7FE",
                    }}
                  >
                    <div>
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
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <p className="lead text-muted">
              Evaluación previa para filtrar candidatos
            </p>
          </div>
        </div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          method="POST"
          action="/tests"
        >
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="mb-3"
          >
            <input
              style={{ textAlign: "center", width: "50%" }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="position"
              placeholder="Buscar la posicion que quieres cubrir, herramientas o pruebas para tus candidatos"
            />
            <button
              style={{ width: "20%", marginLeft: "10px" }}
              type="submit"
              className="btn btn-primary"
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
                  className="w-full lg:w-1/2  md:px-4 lg:px-6 py-3"
                >
                  <div className="bg-white hover:shadow-xl border-red-900">
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
                            <Link
                              style={{ backgroundColor: "#0d6efd" }}
                              to={`/tests/${test._id}`}
                              className="flex text-white 
                            bg-blue-400 hover:bg-blue-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100"
                            >
                              Detalle
                            </Link>
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

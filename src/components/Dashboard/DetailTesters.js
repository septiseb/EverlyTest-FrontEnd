import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import INFO_USER from "../services/user";

export default function DetailTesters() {
  const [grades, setGrades] = useState([]);

  const { idGroupTest } = useParams();

  function colorGrade(gr) {
    if (gr > 80) {
      return "green";
    } else if (gr > 60) {
      return "yellow";
    } else {
      return "red";
    }
  }

  useEffect(() => {
    const getGrades = async () => {
      try {
        const gradesAxios = await INFO_USER.getDetailGrades(idGroupTest);
        console.log(gradesAxios);
        setGrades([...gradesAxios.data.tester]);
      } catch (e) {
        console.log(e);
      }
    };
    getGrades();
  }, [idGroupTest]);


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

      <div id="container" className="mx-auto">
        <div className="block">
          {grades.map((grade, id) => {
            return (
              <>
                <div
                  key={id}
                  className="w-50 h-13 m-0 p-0 lg:flex shadow rounded-lg border  border-gray-400"
                >
                  <div className={`bg-${colorGrade(grade.grade)}-400 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner`}>
                    <div className="text-center tracking-wide">
                      {grade.grade ? (
                        <>
                          <div className="text-white font-bold text-2xl ">
                            {grade.grade}
                          </div>
                          <div className="text-white font-normal text-1xl">
                            Puntaje
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-white font-bold text-2xl ">
                            NA
                          </div>
                          <div className="text-white font-normal text-1xl">
                            Puntaje
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
                    <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
                      {grade.email}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <canvas id="my-chart"></canvas>
        </div>
      </div>
    </>
  );
}

/*  {grades.map((grade, id) => {
            return (
             
            )})} */

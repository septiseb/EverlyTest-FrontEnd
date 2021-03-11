import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import INFO_USER from "../services/user";
import NavBarUser from "./NavBarUser";

export default function DetailTesters() {
  const [grades, setGrades] = useState([]);
  const [error, setError] = useState("");

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
        setGrades([...gradesAxios.data.tester]);
      } catch (e) {
        setError(e);
      }
    };
    getGrades();
  }, [idGroupTest]);

  return (
    <>
      <NavBarUser />
      <div id="container" className="mx-auto">
        <div className="block">
          {grades.map((grade, id) => {
            return (
              <>
                <div
                  key={id}
                  className="w-50 h-13 m-0 p-0 lg:flex shadow rounded-lg border  border-gray-400"
                >
                  <div
                    className={`bg-${colorGrade(
                      grade.grade
                    )}-400 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner`}
                  >
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

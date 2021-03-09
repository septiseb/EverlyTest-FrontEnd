import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarHome from "./NavBarHome";

export default function TestDetail() {
  const {idTest} = useParams();
  const [test, setTest] = useState({ position: [], questions: [] });  

  useEffect(() => {
    const getTest = async () => {
      const test = await axios.get(`http://localhost:3001/tests/${idTest}`);
      setTest(test.data);
      console.log(test.data);
    };
    getTest();
  }, []);

  return (
    <>
      <NavBarHome />

      <div>
        <p>Nombre: {test.name}</p>
        <p>Descripción: {test.description}</p>
        <p>Aplica para las siguientes posiciones:</p>
        {test.position.map((a) => (
          <p>{a}</p>
        ))}

        <p>Dificultad: {test.difficulty}</p>
        <p>Competencia: {test.skills}</p>
        <p></p>
      </div>

      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="/tests/{{test._id}}" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <fieldset>
                <div>
                  <legend className="text-base font-medium text-gray-900">
                    Ejemplo de Preguntas:{" "}
                  </legend>
                </div>
                <>
                {test.questions.map((question) => {
    return (
      <>
        <p className="text-sm text-gray-500">{question.question}</p>
        <div className="mt-4 space-y-4">
          {question.options.map((option) => {
            return (
              <div className="flex items-center">
                <input
                  id="push_everything"
                  name={question._id}
                  value={option}
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  for={option}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </>
    );
  })}
                </>
              </fieldset>
            </div>
            <div
              style={{ justifyContent: "left", display: "flex" }}
              className="px-4 py-3 bg-gray-50 text-right sm:px-6"
            >
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{justifyContent:"left"}}
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

/* {{#if this.finalGrade}}
<div style="background-color: green;width: 20%;height:fit-content;padding:0;margin:0;"
  className="bg-orange-lightest border-l-4 border-orange text-orange-dark p-4" role="alert">
  <p style="margin: 0; padding:0;">Tu calificación es:</p>
  <p style="margin: 0; padding: 0;" className="font-bold">{{this.finalGrade}}</p>
</div>
{{/if}} */


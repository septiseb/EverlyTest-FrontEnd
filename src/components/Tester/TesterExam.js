import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import TESTER_INFO from "../services/tester";

export default function TesterExam() {
  const [exam, setExam] = useState({ questions: [] });
  const [answers, setAnswers] = useState({});
  const [answerTest, setanswerTest] = useState(false);
  const [error, setError] = useState("");

  const { idTester, idTest } = useParams();

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
      numberQuestions: exam.questions.length,
    });
  };

  useEffect(() => {
    const getExam = async () => {
      try {
        const exam = await TESTER_INFO.getExamForTester(idTester, idTest);
        setExam(exam.data);
      } catch (e) {
        setError(e);
      }
    };
    getExam();
  }, [idTester, idTest]);

  const submitExam = async (event) => {
    event.preventDefault();
    try {
      await TESTER_INFO.postExamForTester(answers, idTester, idTest);
      setanswerTest(true);
    } catch (e) {
      setError(e.response.data);
    }
  };

  return (
    <>
      {!answerTest ? (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="mt-5 md:mt-0 md:col-span-2"
        >
          <form onSubmit={(e) => submitExam(e)}>
            <input
              type="hidden"
              name="numberQuestions"
              value={exam.questions.length}
            />

            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <fieldset>
                  {exam.questions.map((question, id) => {
                    return (
                      <>
                        <p key={id} className="text-sm text-gray-500">
                          {question.question}
                          <small>{question.nameExam}</small>
                        </p>
                        <div className="mt-4 space-y-4">
                          {question.options.map((option, id) => {
                            return (
                              <>
                                <div className="flex items-center">
                                  <input
                                    key={id}
                                    onChange={(e) => handleChange(e)}
                                    id="push_everything"
                                    name={question._id}
                                    value={option}
                                    type="radio"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                  />
                                  <label
                                    htmlFor={option}
                                    className="ml-3 block text-sm font-medium text-gray-700"
                                  >
                                    {option}
                                  </label>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </>
                    );
                  })}
                </fieldset>
              </div>
              <div
                style={{ justifyContent: "left", display: "flex" }}
                className="px-4 py-3 bg-gray-50 text-right sm:px-6"
              >
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={{ justifyContent: "left" }}
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Redirect to={`/tester/${idTester}`} />
      )}
    </>
  );
}

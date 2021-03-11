/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AlertaContext from "../../context/alerts/AlertaContex";
import AuthContext from "../../context/auth/AuthContext";
import NavBarHome from "./NavBarHome";

export default function Login(props) {
  // Extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  useEffect(() => {
    if (autenticado) {
      props.history.push("/user-profile");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, props.history]);

  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  // Extraer de usuario
  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  // Cuando el usuario quiera iniciar sesión

  const onSubmit = (e) => {
    e.preventDefault();

    //validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      return mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }

    // pasarlo al action

    iniciarSesion({ email, password });
  };

  return (
    <div className="form-usuario">
      <NavBarHome />
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}

      <div className="flex items-center my-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Iniciar Sesion
              </h1>

              <p className="text-gray-500 dark:text-gray-400">
                Bienvenido de Regreso!
              </p>
            </div>

            <div className="m-7">
              <form onSubmit={onSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Correo
                  </label>

                  <input
                    onChange={onChange}
                    value={email}
                    type="email"
                    name="email"
                    placeholder="correo"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Contraseña
                    </label>

                    <Link
                      href="/"
                      className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                    >
                      Se te olvido la contraseña?
                    </Link>
                  </div>

                  <input
                    onChange={onChange}
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="***********"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Iniciar Sesión
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Todavia no tienes cuenta?{" "}
                  <Link
                    href="/signup"
                    className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                  >
                    Obtener Cuenta
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

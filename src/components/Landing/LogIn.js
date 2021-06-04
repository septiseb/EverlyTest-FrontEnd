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
      <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div class="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div class="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="/">EverlyTest</a>
            </div>
            <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
              Bienvenido y gracias por confiar en nosotros.
            </p>
            <p class="flex flex-col items-center justify-center mt-10 text-center">
              <span>¿Todavía no tienes cuenta?</span>
              <Link to="/signup" class="underline">
                Registrate!
              </Link>
            </p>
            <p class="mt-6 text-sm text-center text-gray-300">
              Read our{" "}
              <a href="/" class="underline">
                terms
              </a>{" "}
              and{" "}
              <a href="/" class="underline">
                conditions
              </a>
            </p>
          </div>
          <div class="p-5 bg-white md:flex-1">
            <h3 class="my-4 text-2xl font-semibold text-gray-700">
              Iniciar Sesión
            </h3>
            <form onSubmit={onSubmit} class="flex flex-col space-y-5">
              <div class="flex flex-col space-y-1">
                <label for="email" class="text-sm font-semibold text-gray-500">
                  Correo
                </label>
                <input
                  onChange={onChange}
                  value={email}
                  type="email"
                  name="email"
                  placeholder="correo"
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div class="flex flex-col space-y-1">
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="text-sm font-semibold text-gray-500"
                  >
                    Contraseña
                  </label>
                  <Link
                    href="/"
                    class="text-sm text-blue-600 hover:underline focus:text-blue-800"
                  >
                    Olvidó contraseña?
                  </Link>
                </div>
                <input
                  onChange={onChange}
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="***********"
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Iniciar Sesión
                </button>
              </div>
              <div class="flex flex-col space-y-5">
                <span class="flex items-center justify-center space-x-2">
                  <span class="h-px bg-gray-400 w-14"></span>
                  <span class="font-normal text-gray-500">o iniciar con</span>
                  <span class="h-px bg-gray-400 w-14"></span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

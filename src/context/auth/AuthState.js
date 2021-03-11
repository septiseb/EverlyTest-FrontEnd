import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    userToken:  localStorage.getItem("user"), // información del usuario
    usuario: "",
    mensaje: null, // relacionado con las alertas
    cargando: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Registra un usuario
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });

      // OBTENER EL USUARIO
      usuarioAutenticado();
    } catch (error) {
      // console.log(error.response.data.msg)
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  // Retorna el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token"); // LEER EL TOKEN DE LOCAL STORAGE

    if (token) {
      // Función para enviar el token por headers
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/login-prueba");

      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
      
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  // Cuando el usuario inicia sesión
  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("login-prueba", datos);

      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });

      usuarioAutenticado();
    } catch (error) {
      console.log(error);
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };

  // Cierra la sesión del usuario
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        userToken: state.userToken,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

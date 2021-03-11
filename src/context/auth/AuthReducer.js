/* eslint-disable import/no-anonymous-default-export */
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
    case REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };

    case CERRAR_SESION:
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      return {
        ...state,
        token: null,
        usuario:"",
        autenticado: null,
        mensaje: action.payload,
        cargando: false,
      };

    case OBTENER_USUARIO:
      localStorage.setItem("user", action.payload._id);
      
      return {
        ...state,
        autenticado: true,
        usuario: action.payload._id
      };

    default:
      return state;
  }
};

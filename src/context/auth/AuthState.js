import React, { useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";
import AUTH_SERVICE from "../../components/services/auth";

import { OBTENER_TOKEN, BORRAR_TOKEN, OBTENER_ERROR } from "../../types/index";
import axios from "axios";

export default function TokenState(props) {
  const initialState = {
    token: "",
    error: "",
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const obtenerToken = async (obj) => {
    try {
      const res = await AUTH_SERVICE.login(obj);
      console.log(res);
      dispatch({
        type: OBTENER_TOKEN,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: OBTENER_ERROR,
        payload: e.response.data.errorMessage,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ error: state.error, token: state.token, obtenerToken }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

import React, { useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";
import AUTH_SERVICE from "../../components/auth/auth";

import { OBTENER_TOKEN, BORRAR_TOKEN } from "../../types/index";
import axios from "axios";

export default function TokenState(props) {
  const initialState = {
    token: "",
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(()=>{

},[])

  const obtenerToken = async (obj) => {
    const res = await AUTH_SERVICE.login(state);
    dispatch({
      type: OBTENER_TOKEN,
      payload: res
    });
  }

  return( 
      <AuthContext.Provider value={{token:state.token,obtenerToken}}> 
      {props.children}
      </AuthContext.Provider>
  )
}

/* eslint-disable import/no-anonymous-default-export */
import { BORRAR_TOKEN, OBTENER_TOKEN, OBTENER_ERROR } from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_TOKEN:
      return { ...state, token: action.payload };
    case BORRAR_TOKEN:
      return {
        token: "",
      };
    case OBTENER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

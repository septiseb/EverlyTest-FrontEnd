/* eslint-disable import/no-anonymous-default-export */
import { BORRAR_TOKEN, OBTENER_TOKEN} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_TOKEN:
      return {
        token: action.response,
      };
    default:
      return state;
  }
};

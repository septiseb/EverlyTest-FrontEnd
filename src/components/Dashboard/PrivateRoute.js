import React, {useContext, useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./../../context/auth/AuthContext";

export default function RutaPrivada({ component: Component, ...props }) {
  const authCtx = useContext(AuthContext);
  const { userToken, autenticado, usuarioAutenticado, usuario } = authCtx;

  return (
    <>
      <Route
        {...props}
        render={(props) =>
          !autenticado && !(typeof userToken === "string") ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    </>
  );
}

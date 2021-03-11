import React, { Component, useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./../../context/auth/AuthContext";

export default function RutaPrivada({ component: Component, ...props }) {
  const authCtx = useContext(AuthContext);
  const { userToken, autenticado, usuarioAutenticado, usuario } = authCtx;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <>
      <Route
        {...props}
        render={(props) =>
          !autenticado ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    </>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import INFO_USER from "../../components/services/user";
import AuthContext from "../../context/auth/AuthContext";
import NavBarUser from "./NavBarUser";
import Notification from "./Notification";
import TestDash from "./TestDash";

export default function HomeDash() {
  const [userInfo, setUserInfo] = useState({activo: true});
  const [trialLeft, setTrialLeft] = useState();
  const ctx = useContext(AuthContext);

  useEffect(() => {
    const getTest = async () => {
      try {
        const userInfo = await INFO_USER.getUserInfo(
          ctx.userToken || ctx.usuario
        );
        setTrialLeft(userInfo.data.leftDay);
        setUserInfo(userInfo.data.userInfo);
      } catch (e) {
        console.log(e.response.data);
      }
    };
    getTest();
  }, [ctx.userToken, ctx.usuario]);

console.log(userInfo,trialLeft);

  return (
    <>
      {trialLeft<=0 && !userInfo.activo ? (
        <Redirect
          to={`/checkout/${ctx.userToken || ctx.usuario}`}
          message={"HOLA AQUI ESTOY"}
        />
      ) : (
        <>
          <NavBarUser id={ctx.userToken || ctx.usuario} />
          <Notification days={trialLeft} id={ctx.userToken || ctx.usuario} I />
          <TestDash />
        </>
      )}
    </>
  );
}

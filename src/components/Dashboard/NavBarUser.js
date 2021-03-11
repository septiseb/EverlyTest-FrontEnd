import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

export default function NavBarUser(props) {
  const ctx = useContext(AuthContext);
  const history = useHistory();

  const eraseSession = (event) => {
    event.preventDefault();
    console.log("HOLA");
    ctx.cerrarSesion();
    history.push("/login");
  };

  return (
    <div>
      <nav style={{ backgroundColor: "#4f46E6" }} className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
              <div className="flex justify-between">
                <div>
                  <p className="text-white block py-2 text-base text-lg">
                    <a href="/user-profile">Regresar</a>
                    {"  "}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-white ml-500">
                    <form onSubmit={(e) => eraseSession(e)}>
                      <button type="submit"> Cerrar Sesion</button>
                      <Link to={`/checkout/${props.id}`}>
                        <button id="checkout">Subscripción</button>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>

        <div className="hidden sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

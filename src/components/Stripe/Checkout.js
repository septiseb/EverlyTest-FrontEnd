import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function Checkout(props) {
  const stripe = useStripe();
  const { idUser } = useParams();

  const createCheckoutSession = async (priceId) => {
    try {
      const axiosCall = await axios.post(
        `http://localhost:3001/payment/create-checkout-session/${idUser}`,
        {
          priceId: priceId,
        }
      );
      const connectStripe = await stripe.redirectToCheckout({
        sessionId: axiosCall.data.sessionId,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="">
          <div className="text-black font-semibold text-2xl">
            <h1>{props.message}</h1>
          </div>
          <div className="pt-24 flex flex-row">
            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Basico</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">100</span>
                <span className="text-gray-400 font-medium">/ mes</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="pl-2">
                    Acceso a crear{" "}
                    <span className="text-black">4 pruebas por mes</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    Monitoreo <span className="text-black">de candidatos</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    <span className="text-black">10</span> pruebas habilitadas
                  </span>
                </p>

                <button
                  onClick={() =>
                    createCheckoutSession("price_1ITbO1Cdjzp44qeDQ8YSmsYx")
                  }
                  id="checkout"
                >
                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Escoger Plan</span>
                  </p>
                </button>
              </div>
            </div>
            <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
              <h1 className="text-white font-semibold text-2xl">Startup</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">150</span>
                <span className="text-gray-400 font-medium">/ mes</span>
              </p>
              <hr className="mt-4 border-1 border-gray-600" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="pl-2">
                    Crear <span className="text-white">10 pruebas al mes</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    Dashboard <span className="text-white">de seguimiento</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    <span className="text-white">Acceso</span> a pruebas
                    psicométricas y competencias técnicas
                  </span>
                </p>

                <button
                  onClick={() =>
                    createCheckoutSession("price_1ITbS2Cdjzp44qeD9f2nEDiX")
                  }
                  className=""
                >
                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Escoger Plan</span>
                  </p>
                </button>
              </div>
              <div className="absolute top-4 right-4">
                <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                  Popular
                </p>
              </div>
            </div>
            <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Empresa</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">200</span>
                <span className="text-gray-400 font-medium">/ mes</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="pl-2">
                    Crear <span className="text-black">pruebas ilimitadas</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    Personalizacion{" "}
                    <span className="text-black">de pruebas</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="pl-2">
                    <span className="text-black">Acceso</span> a toda la
                    librería de pruebas
                  </span>
                </p>

                <button
                  onClick={() =>
                    createCheckoutSession("price_1ITbPtCdjzp44qeDROjIZ7eI")
                  }
                  id="checkout"
                >
                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Escoger Plan</span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

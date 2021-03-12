import React from "react";
import NavBarHome from "./NavBarHome";


export default function Home() {
  return (
    <>
      <NavBarHome />

<main className="mt-5 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
  <div className="sm:text-center lg:text-left">
    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <span className="block  text-center">EverlyTest</span><br/>
      <span className="block text-blue-500 xl:inline text-s">La plataforma que te ayuda a filtrar a los candidatos previamente a la entrevista</span>
    </h1>
    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      Te ayudamos a captar el mejor talento para la posición que requieres cubrir mediante pre-evaluaciones hechas a la medida.
    </p>
    </div>
</main>
<hr className="my-1"/>
<div className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-left">
      <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase text-2xl">Beneficios</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        La mejor herramienta para eficientar los procesos de reclutamiento
      </p>
    </div>

    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Ampliar las solicitudes de CV
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Al ser una plataforma remota con controles de autenticación rigurosos puedes ampliar tu búsqueda de candidatos. 
            </dd>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Sin prejuicios
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Ayudamos a proveer información de los candidatos mediante puntajes para reducir los prejucios al momento de escoger al candidato
            </dd>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Reducir tiempos de reclutamiento
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Al hacer pre evaluaciones a la medida del perfil, ayudamos a los reclutadores a filtrar la bolsa de candidatos de una manera más eficiente
            </dd>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Retroalimentación al instante
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Podrás saber el desempeño de cada candidato y darle seguimiento a cada uno de ellos.
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</div>


    </>
  );
}

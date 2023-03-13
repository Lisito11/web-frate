
export const WhatIsFrate = () => {
  return (
    <div className="bg-red-300 h-screen bg-what-is-fml-mobile bg-no-repeat bg-center bg-cover max-w  ">
    <div className="bg-black h-screen bg-opacity-50 flex flex-col justify-end items-center">
      <h2 className="p-3 font-roboto uppercase text-red-500 text-3xl">¿Qué es la FML?</h2>
      
      <div className="px-3 pb-6">
        
        <div className="bg-red-700 text-white p-3 rounded-md  leading-6">
            <p className="py-3">
              La <b>Fraternidad Misionera Lasallista</b> es un grupo de jovenes lasallista en su mayoría con un mismo objetivo común,
              <b> llevar el amor de Dios a cada corazón.</b> 
            </p>
            <p className="py-3">
            Se desprenden de su vida normal por alrededor de una semana para brindarse
              en cuerpo y alma a comunidades pobres de la República Dominicana.
            </p>
          </div>
          <button className="group relative h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow my-3">
            <div className="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Conocer mas!
            </span>
          </button>
      </div>
    </div>
  </div>
  )
}

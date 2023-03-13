
export const ContactUs = () => {
  return (
    <div className="h-max bg-green-300 pb-6 bg-opacity-20">
        <div className="flex justify-center items-center">
          <h2 className="p-4 font-roboto uppercase text-green-500 text-3xl">
            ¿Quieres ser parte?
          </h2>
        </div>
        <div className="flex justify-center ">
                <img className="w-full h-64 " src="/images/join-us.svg" />
              </div>
        <div className="flex items-center">
          <div className="mx-auto p-3">
           
            <div className="bg-green-500 bg-opacity-10 p-3 rounded-md leading-6 mt-5">
            <p className="leading-6">
              Puedes aportar con una charla. Solicitar ser un miembro de la FML, patrocinar una actividad y mucho mas!
            </p>
          </div>
            <form action="" className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Escribe tu correo"
                className="w-full rounded border border-blue-300 bg-transparent px-3 py-2 text-blue-500 placeholder:text-blue-500 md:max-w-[18rem]"
              />
              <textarea
                name="message"
                id="email"
                placeholder="Déjanos un mensaje"
                className="w-full rounded border border-blue-300 bg-transparent px-3 py-2 text-blue-500 placeholder:text-blue-500 md:max-w-[18rem]"
              />
              <button type="submit" className="mt-4 w-full rounded bg-green-700 px-14 py-2 text-center text-white">Contáctanos</button>

            </form>
          </div>
        </div>

      </div>
  )
}

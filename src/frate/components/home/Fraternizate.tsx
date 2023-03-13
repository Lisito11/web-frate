export const Fraternizate = () => {
  return (
    <div className="h-max bg-green-300 pb-6 bg-opacity-20">
      <div className="flex justify-center items-center">
        <h2 className="p-4 font-roboto uppercase text-green-500 text-3xl">
          Nuestro Fraternízate
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="px-7">
          <img
            src="/images/fraternizate.png"
            className="rounded-md shadow-lg hover:shadow-xl"
          />
        </div>
        <button className="group relative h-10 w-56 overflow-hidden rounded-lg bg-white text-lg shadow my-3">
            <div className="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Leer el fraternizate
            </span>
          </button>
        
      </div>
    </div>
  );
};


export const Activities = () => {
  return (
    <div className="mb-3">
        <div className="flex  justify-center items-center">
      <h2 className="p-3 font-roboto uppercase text-blue-500 text-3xl">Actividades</h2>

      </div>
        <div className="py-3 ">
          <div className="relative flex items-end overflow-hidden shadow-lg rounded-md">
            <img src={`/images/activities.jpg`} />
          </div>
          <div className="bg-blue-500 bg-opacity-10 p-3 rounded-md leading-6 mt-5">
            <p className="leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              officiis modi reprehenderit, facilis autem, repellat ducimus
              consectetur a ut deserunt maiores culpa omnis, sunt aliquam ipsum
              quod debitis. Delectus, in.
            </p>
          </div>
         
          <button className="group relative h-8 w-48 overflow-hidden rounded-lg bg-white text-base shadow my-4">
            <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Ver actividades
            </span>
          </button>
        </div>
        </div>
  )
}

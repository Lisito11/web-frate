import React from "react";

export const Comunities = () => {
  const comunities = [
    {
      name: "Arroyo Dulce",
      place: "Barahona",
      img: "c1.jpg",
      link: "/comunities",
    },
    {
      name: "Los Cocos",
      place: "Barahona",
      img: "c1.jpg",
      link: "/comunities",
    },
    {
      name: "Najayo",
      place: "Baní",
      img: "c1.jpg",
      link: "/comunities",
    },
    {
      name: "El Corte",
      place: "Baní",
      img: "c1.jpg",
      link: "/comunities",
    },
    {
      name: "Los Roche",
      place: "Baní",
      img: "c1.jpg",
      link: "/comunities",
    },
    {
      name: "Gualey",
      place: "Baní",
      img: "c1.jpg",
      link: "/comunities",
    },
    {
      name: "Juan de Sena",
      place: "Baní",
      img: "c1.jpg",
      link: "/comunities",
    },
    {
      name: "Las Barias",
      place: "Baní",
      img: "c1.jpg",
      link: "/comunities",
    },
  ];

  return (
    <div className="h-max bg-green-300 pb-6 bg-opacity-20">
      <div className="flex  justify-center items-center mt-3">
      <h2 className="p-3 font-roboto uppercase text-green-500 text-3xl">Comunidades</h2>

      </div>

      <div className="flex flex-col justify-center items-center space-y-5 mx-6 text-white ">
        {comunities.map(({ name, place, img }) => (
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <a href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src={`/images/communities/${img}`} alt={name} />
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700">{name}</h2>
                <p className="mt-1 text-sm text-slate-400">{place}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

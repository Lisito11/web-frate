import React from 'react'

export const Comunities = () => {

  const comunities = [
    {
        name: 'Arroyo Dulce',
        place: 'Barahona',
        link: '/comunities'
    },
    {
        name: 'Los Cocos',
        place: 'Barahona',
        link: '/comunities'
    },
    {
        name: 'Najayo',
        place: 'Baní',
        link: '/comunities'
    },
    {
        name: 'El Corte',
        place: 'Baní',
        link: '/comunities'
    },
    {
        name: 'Los Roche',
        place: 'Baní',
        link: '/comunities'
    },
    {
        name: 'Gualey',
        place: 'Baní',
        link: '/comunities'
    },
    {
        name: 'Juan de Sena',
        place: 'Baní',
        link: '/comunities'
    },
    {
        name: 'Las Barias',
        place: 'Baní',
        link: '/comunities'
    },
   
  ]



  return (
    <div className="h-max bg-green-300 pb-6">
    <h2 className="text-xl font-black p-3">Comunidades</h2>

    <div className="flex flex-col justify-center items-center space-y-5 mx-6 text-white">

   

    {comunities.map(({name, place}) => (

<div className="flex flex-col justify-center items-center w-full bg-green-700 rounded-md shadow-xl">
<div className="flex justify-between w-full p-2 ">
  <div>
    <div className="flex items-center text-xs px-3 py-1 bg-blue-200 text-blue-800 rounded-full font-black">
      {place}
    </div>
  </div>
</div>

<div className='flex flex-col justify-center items-center'>
  <div className="font-bold text-2xl pt-6">{name}</div>
  <div className='pb-6'>
    <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 inline  text-red-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
    </div>
</div>
</div>




    ))}



    </div>

  
    

  </div>
  )
}

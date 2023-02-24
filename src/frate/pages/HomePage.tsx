import { Combobox, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { AppLayout } from "../layouts/AppLayout";

export const HomePage = () => {

  const currencies = [
    {
      name: 'DOP',
      key: '1'
    },
    {
      name: 'USD',
      key: '2'
    },
  ]
  const [selected, setSelected] = useState(currencies[0])

  return (
    <AppLayout>
      <div className="bg-main-mobile bg-no-repeat bg-center bg-cover max-w h-screen flex flex-col  ">
        <div className="h-screen flex justify-center items-center px-6 bg-white  bg-opacity-20">
          <h1 className="tracking-wide text-3xl font-black text-white">
            Una <span className=" italic font-black font-temp text-black text-5xl" > misión </span>
            llevar el <span className="italic font-bold text-red-600 font-temp text-5xl"> amor </span>
            de <span  className="italic font-black text-black font-temp text-5xl"> Dios </span>a cada
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 ml-2 inline text-red-600 hover:animate-pulse"   
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </h1>
        </div>
       

        <div className="p-6 h-screen bg-white bg-opacity-20 ">
        <form
          id="login_form"
          action="api_login"
          method="POST"
          className="flex flex-col justify-center p-4 rounded-md bg-sky-200"
        >
           
           <div className="inline-flex items-center self-start mb-3">
             

              <span className="font-bold text-gray-900 mt-1">Donación para la FML</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 text-red-600 animate-pulse"
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
          <div className="flex justify-between items-center mb-3">
          
           

            <RadioGroup value={selected} onChange={setSelected} className=''>
            <RadioGroup.Label className="sr-only">Moneda</RadioGroup.Label>
            <div className="flex flex-row justify-center items-center">
              {currencies.map((currency) => (
                <RadioGroup.Option
                  key={currency.key}
                  value={currency.name}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                        : ''
                    }
                    ${
                      checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                    }
                      relative flex cursor-pointer rounded-lg px-3 mx-1 py-2 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? 'text-white' : 'text-gray-900'
                              }`}
                            >
                              {currency.name}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="h-4 w-4 ml-1" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>

           


            <div className="flex">
              <button
                type="button"
                className="bg-yellow-600 p-1.5 font-bold rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <input
                id="item_count"
                type="number"
                value="1"
                className="max-w-[80px] font-bold font-mono py-1.5 px-2 mx-1.5
            block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-1
            focus:ring-sky-500
            focus:invalid:border-red-500  focus:invalid:ring-red-500"
              />

              <button
                type="button"
                className="bg-green-600 p-1.5 font-bold rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <label className="text-sm font-medium">De parte de</label>
          <input
            className="mb-3 px-2 mt-1 block w-full py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
            type="text"
            name="username"
            placeholder="Lisanny Pena"
          />
          <label className="text-sm font-medium">Mensaje ( opcional )</label>
          <textarea
            className="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
            name="messages"
            placeholder="Déjanos un mensaje"
          ></textarea>
          <button
            className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-medium text-gray-100 block transition duration-300"
            type="submit"
            
          >
            <span id="login_process_state" className="hidden">
              Sending :)
            </span>
            <span id="login_default_state">
              Donar<span id="subtotal"> $1</span>
            </span>
            <span className="px-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 inline"
      >
        <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
      </svg>
    </span>
          </button>
        </form>
        </div>
      
     
      


      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas ipsam, odit, aspernatur voluptatibus debitis provident fugit nobis pariatur dolores maiores necessitatibus labore sequi, eveniet quia eius quidem id explicabo!
      </div>
      <hr />
      <br />
      <br />
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas ipsam, odit, aspernatur voluptatibus debitis provident fugit nobis pariatur dolores maiores necessitatibus labore sequi, eveniet quia eius quidem id explicabo!
      </div>
      
    </AppLayout>
  );
};


function CheckIcon(props : any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
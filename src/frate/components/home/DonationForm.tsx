import React from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export const DonationForm = () => {
  const currencies = [
    {
      name: "DOP",
      key: "1",
    },
    {
      name: "USD",
      key: "2",
    },
  ];
  const [selected, setSelected] = useState(currencies[0]);

  return (
    <div className="pb-6 h-max">



      <div className="inline-flex items-center self-start">
        <h2 className="font-black text-xl text-gray-900 p-3">
          Donación para la FML
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 mb-1 text-red-600 animate-pulse"
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
      <div className="flex flex-col justify-center">
        <div className="p-4">
          <form
            id="login_form"
            action="api_login"
            method="POST"
            className="flex flex-col justify-center p-4 rounded-md bg-sky-200"
          >
            <div className="flex justify-between items-center mb-3">
              <RadioGroup value={selected} onChange={setSelected} className="">
                <RadioGroup.Label className="sr-only">Moneda</RadioGroup.Label>
                <div className="flex flex-row justify-center items-center">
                  {currencies.map((currency) => (
                    <RadioGroup.Option
                      key={currency.key}
                      value={currency.name}
                      className={({ active, checked }) =>
                        `${
                          active
                            ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                            : ""
                        }
                ${checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"}
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
                                    checked ? "text-white" : "text-gray-900"
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
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center mt-2 gap-8">
          <div className="flex flex-row gap-11">
           
            <div className="flex flex-col items-center">
              <img className="h-20 w-20" src="/images/heart-cross.png" alt="" />
              <h4 className="font-black">+50</h4>
              <p>Misiones</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="h-20 w-20" src="/images/cross.png" alt="" />
              <h4 className="font-black">+200</h4>
              <p>Misioneros</p>
            </div>

          </div>
          
          <div className="flex flex-col items-center">
              <img className="h-20 w-20" src="/images/community.png" alt="" />
              <h4 className="font-black">+1500</h4>
              <p>Niños y Jovenes</p>
          </div>
         
        </div>
        
      </div>
    </div>
  );
};

function CheckIcon(props: any) {
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
  );
}

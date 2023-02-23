import { AppLayout } from "../layouts/AppLayout";

export const HomePage = () => {
  return (
    <AppLayout>
      <div className="bg-main bg-no-repeat bg-center bg-cover max-w h-screen  flex flex-col">
        <div className="h-screen flex justify-center items-center px-6 backdrop-blur-sm ">
        <h1 className="tracking-wide text-3xl font-bold text-white">
          Una <span 
          className=" italic font-black text-red-600 font-temp text-4xl">
            misión
          </span> llevar el {" "}
          <span  className="italic font-black text-black font-temp text-4xl">
            amor
            </span> de{" "}
            <span  className="italic font-black text-black font-temp text-4xl">
            Dios
            </span> a cada
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 ml-2 inline text-red-600 animate-pulse"
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
       

        {/* <div className="p-6 bg-sky-200 rounded">
        <form
          id="login_form"
          action="api_login"
          method="POST"
          className="flex flex-col justify-center"
        >
          <div className="flex justify-between items-center mb-3">
            <div className="inline-flex items-center self-start">
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

              <span className="font-bold text-gray-900 mt-1">Donación</span>
            </div>

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
                className="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
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
            className="mb-3 px-2 py-1.5
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
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
            className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300"
            type="submit"
          >
            <span id="login_process_state" className="hidden">
              Sending :)
            </span>
            <span id="login_default_state">
              Donar ahora<span id="subtotal"></span>
            </span>
          </button>
        </form>
      </div> */}


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

import { DonationForm } from "../components/home/DonationForm";
import { AppLayout } from "../layouts/AppLayout";
import { Comunities } from "../components/home/Comunities";
import { WhatIsFrate } from "../components/home/WhatIsFrate";
import { Activities } from "../components/home/Activities";
import { Teams } from "../components/home/Teams";
import { Fraternizate } from "../components/home/Fraternizate";
import { ContactUs } from '../components/home/ContactUs';

export const HomePage = () => {
  return (
    <AppLayout>
      <div className="bg-main-mobile bg-no-repeat bg-center bg-cover max-w h-screen flex flex-col  ">
        <div className="h-screen flex justify-center items-center px-6 bg-black bg-opacity-50 md:justify-evenly">
          <h1 className="tracking-widest flex flex-col text-3xl font-black leading-4 text-white">
            <span className="font-roboto uppercase text-red-500 text-4xl">
              Una{" "}
            </span>
            <span className="font-temp  text-blue-500 text-7xl"> misión: </span>
            <span className="font-roboto uppercase text-green-500 text-lg">
              Llevar el
            </span>
            <span className="font-roboto uppercase text-red-500 text-4xl">
              {" "}
              amor{" "}
            </span>
            <span className="font-roboto uppercase text-blue-500 text-lg">
              {" "}de{" "}
              <span className="font-temp normal-case text-green-500 text-7xl">
                Dios{" "}
              </span>{" "}
            </span>

            <span className="font-roboto uppercase text-blue-500 text-lg">
              a cada{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline text-red-600 h-16 w-16 hover:animate-pulse"
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
            </span>
          </h1>


        </div>
      </div>

      <DonationForm />

      <WhatIsFrate />

      <Comunities />

      <div className="h-max p-3">
        <Activities />
        <Teams />
      </div>

      <ContactUs/>
    </AppLayout>
  );
};

import { Divider } from "./Divider";
import { DonationButton } from "./DonationButton";
import { MenuMobile } from "./MenuMobile";
import { useFrateStore } from "../../../store/useStore";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { changeMenu, openMenu, menuList, updateMenuItem, closeMenu, menu } = useFrateStore((state) => state);

  return (
    <div className="">
      <nav className="relative px-6 py-3 flex justify-between items-center bg-white">
        {/* LOGO */}
        <div className="flex justify-between items-center">
          <a href="#">
          <img src="/images/logo.png" alt="" className="h-16 sm:h-20" />
          </a>
          <a className="pt-3 px-3" href="#">
            <span className="text-3xl sm:text-4xl font-bold font-sans text-blue-600">
              F
            </span>
            <span className="hidden sm:inline font-bold font-sans text-blue-600 pr-2 lg:hidden">
              raternidad
            </span>

            <span className="text-3xl sm:text-4xl font-bold font-sans text-red-600">
              M
            </span>
            <span className="hidden sm:inline font-bold font-sans text-red-600 pr-2 lg:hidden">
              isionera
            </span>

            <span className="text-3xl sm:text-4xl font-bold font-sans text-green-600 ">
              L
            </span>
            <span className="hidden sm:inline font-bold font-sans text-green-600 lg:hidden">
              asallista
            </span>
          </a>
        </div>

        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={() => changeMenu(openMenu)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-4">
          {menuList.map(({ name, link, selected }) => (
            <>
              <li>
                <Link
                  onClick={() => updateMenuItem({name, link, selected: 'text-blue-600'})}
                  className={`text-sm ${selected} hover:text-gray-500`}
                  to={link}
                >
                  {name}
                </Link>
              </li>

              {name != 'Contacto' ? <Divider /> : ""}
              
            </>
          ))}
        </ul>

        <DonationButton
          styles={
            "hidden lg:flex justify-center items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          }
        />
      </nav>

      <MenuMobile />
    </div>
  );
};

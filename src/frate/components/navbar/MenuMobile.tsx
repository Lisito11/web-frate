import { DonationButton } from './DonationButton';
import { useFrateStore } from '../../../store/useStore';
import { Link } from 'react-router-dom';

export const MenuMobile = () => {

  const {changeMenu, menu, closeMenu, menuList, updateMenuItem} = useFrateStore((state) => state);

  return (
    <div className={`navbar-menu relative z-50 ${menu}`} id="drawer">
      <div
        className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        onClick={() => changeMenu(closeMenu)}
      ></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <a className="mr-auto text-3xl font-bold leading-none" href="#">
            <img src="/images/logo.png" alt="" className="h-16 sm:h-20" />
          </a>

          <button
            className="navbar-close"
            onClick={() => changeMenu(closeMenu)}
          >
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div>
          <ul>

          {menuList.map(({ name, link, selected }) => (
            <>
              <li className="mb-1">
              <Link
                onClick={() => {
                  updateMenuItem({name, link, selected: 'text-blue-600'})
                  changeMenu(closeMenu)
                }}
                className={`block p-4 text-sm font-semibold ${selected} hover:bg-blue-50 hover:text-blue-600 rounded`}
                to={link}
              >
                {name}
              </Link>
            </li>
            </>
          ))}
          </ul>
        </div>

        <div className="mt-auto">
          <DonationButton
            styles={
              "flex justify-center items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            }
          />
          <p className="my-4 text-xs text-center text-gray-400">
            <span>FML © 2023</span>
          </p>
        </div>
      </nav>
    </div>
  );
};

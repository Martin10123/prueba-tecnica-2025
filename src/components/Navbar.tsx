import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 border-b border-gray-200">
      <nav className="w-full container mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <div className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80">
            <span className="inline-flex items-center gap-x-2 text-xl font-semibold">
              <img
                className="w-10 h-auto"
                src="/assets/logo-M.svg"
                alt="Logo"
              />
              Martin
            </span>
          </div>

          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent"
              onClick={handleToggleDropdown}
            >
              <IoMenuOutline size={17} />

              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 basis-full grow
            ${openDropdown ? "block" : "hidden sm:block"}
            `}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium text-center focus:outline-none ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `font-medium text-center focus:outline-none ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              Perfil
            </NavLink>

            <button className="font-medium text-red-500 hover:text-red-600 focus:outline-none focus:text-red-400 dark:text-red-400 dark:hover:text-red-500 dark:focus:text-red-500">
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

"use client";

import { GlobalContext } from "@/context";
import { navOptions } from "@/utils";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import NavModal from "../NavModal";

function NavItems({ isModalView = false, onItemClick }) {
  return (
    <div
      className={`items-center w-auto justify-end md:flex md:w-auto ${
        isModalView ? "" : "hidden"
      }`}
    >
      <ul
        className={`flex flex-col mr-4 p-4 md:p-0 mt-4 font-medium font-mono md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
          isModalView ? "border-none" : "border border-gray-100"
        }`}
      >
        {navOptions.map((item) => (
          <li
            className="cursor-pointer block py-2 pl-4 pr-4 mb-4 bg-amber-700 hover:bg-amber-600 text-black rounded md:p-1 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-lg shadow-amber-400/30"
            key={item.id}
            onClick={() => onItemClick(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const { showNavModal, setShowNavModal } = useContext(GlobalContext);
  const router = useRouter();

  const handleNavModalClick = (path) => {
    setShowNavModal(false);
    router.push(path);
  };

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-20 border-b bg-gradient-to-bl from-emerald-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"></div>
        <NavItems router={router} isModalView={false} />
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-yellow-500 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={() => setShowNavModal(true)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </nav>
      <NavModal
        showModalTitle={false}
        mainContent={
          <NavItems isModalView={true} onItemClick={handleNavModalClick} />
        }
        show={showNavModal}
        setShow={setShowNavModal}
      />
    </>
  );
}

import React from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import Toggle from "./darkMode/ThemeToggle";

const NavBar = () => {
  return (
    <header>
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              color="currentColor"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
                <li>
                  <div className="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                    Shop
                  </div>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                    href="#footer"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-xl ">
              <img
                src={logo}
                alt="loguito"
                style={{ width: 24, height: 24, viewBox: "0 0 24 24" }}
              />
              Ecom
            </div>
          </div>
          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <div className="inline-block no-underline hover:text-black">
              <svg
                className="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                color="currentColor"
              >
                <circle fill="none" cx="12" cy="7" r="3" />
                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
              </svg>
            </div>
            <CartWidget />
            <div className="pl-3 inline-block no-underline hover:text-black">
            <Toggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

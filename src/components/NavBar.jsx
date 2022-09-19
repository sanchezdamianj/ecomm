import React from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import Toggle from "./darkMode/ThemeToggle";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { LoginContext } from "./context/LoginContext";

const NavBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);
  const { cartQuantity } = useContext(CartContext);
  const { user, logOut } = useContext(LoginContext);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.trim());
  };
  const handleSearch = (evt) => {
    evt.preventDefault();
    navigate({ pathname: `/items/search/${search}` });
  };
  const home = () => {
    setSearch(" ");
    navigate("/");
  };
  return (
    <>
      <header>
        <nav
          id="header"
          className="w-screen z-30 top-0 py-1 bg-gray-200 drop-shadow-lg"
        >
          <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 px-6 py-3 ">
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
                <ul className="md:flex items-center justify-start text-base pt-4 md:pt-0">
                  <li>
                    <div className="order-1 md:order-2">
                      <Link to="/" onClick={home}>
                        <div className="flex items-center tracking-wide no-underline hover:no-underline font-semibold text-lg px-4">
                          <img
                            src={logo}
                            alt="loguito"
                            style={{
                              width: 24,
                              height: 24,
                              viewBox: "0 0 24 24",
                              marginRight: 10,
                              marginLeft: 10,
                            }}
                          />
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="text-gray-500 font-semibold inline-flex no-underline hover:text-black hover:underline py-2 px-4">
                      Ecomm
                    </div>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 inline-flex no-underline hover:text-black hover:underline py-2 px-4"
                      href="#footer"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <button
                      className="text-xs text-gray-50 px-4 md:hidden"
                      onClick={() => logOut()}
                    >
                      <p className="text-gray-500">Hi {user.user} </p>
                      <p className="text-gray-400"> Log out</p>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="order-2 md:order-3 flex items-center"
              id="nav-content"
            >
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  name="search"
                  value={search}
                  onChange={handleChange}
                  placeholder="What are you looking for?"
                  className="w-52 no-underline rounded-xl hover:text-black px-1 py-1 mx-2 inline-flex"
                ></input>
                <button
                  type="submit"
                  className="mx-0 text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-xs px-2 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                  Search
                </button>
              </form>
              <CartWidget orderQuantity={cartQuantity} />
              <div className="pl-3 inline-block no-underline hover:text-black hidden md:inline-flex">
                <Toggle />
              </div>

              <button
                className="text-xs text-gray-500 hidden lg:inline-flex"
                onClick={() => logOut()}
              >
                <p>Hi {user.user} </p>
                <p className="text-xs text-gray-400 mx-2"> Log out</p>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

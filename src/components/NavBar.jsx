import React from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
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

  const userAccount = () => {
    setSearch("");
    navigate("/userAccount");
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
                <ul className="md:flex items-center justify-start text-base pt-4 md:pt-0 ml-0">
                  <li>
                    <div className="order-1 md:order-2">
                      <Link to="/" onClick={home}>
                        <div className="flex items-center tracking-wide no-underline hover:no-underline font-semibold text-lg px-2 py-2">
                          <img
                            src={logo}
                            alt="loguito"
                            style={{
                              width: 24,
                              height: 24,
                              viewBox: "0 0 24 24",
                              marginRight: 10,
                              marginLeft: 10                        
                            }}
                          />
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="px-0">
                    <CartWidget orderQuantity={cartQuantity} />
                  </li>
                  <li>
                    <a
                      className=" text-xs text-semibold text-gray-500 inline-flex no-underline hover:text-black hover:underline py-2 px-4"
                      href="#footer"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <Link to={"/userAccount"} onClick={userAccount}>
                      <div className="text-xs text-gray-500 ml-4 md:hidden">
                        Hi {user.user}
                      </div>
                    </Link>
                    <button
                      className="text-xs text-gray-50 px-4"
                      onClick={() => logOut()}
                    >
                      <p className="text-gray-400 md:hidden">Log out</p>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="order-2 md:order-3 flex items-center justify-center"
              id="nav-content"
            >
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  name="search"
                  value={search}
                  onChange={handleChange}
                  placeholder="What are you looking for?"
                  className="md:w-80 no-underline rounded-xl md:text-xs hover:text-black px-1 py-1 mx-2"
                ></input>
                <button
                  type="submit"
                  className="mx-0 text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-xs rounded-lg text-xs px-2 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                  Search
                </button>
              </form>
              <Link to={"/userAccount"} onClick={userAccount}>
                <button className="text-xs text-gray-500 hidden md:inline-block px-2">
                  <svg
                    style={{
                      width: 15,
                      height: 15,
                      viewBox: "0 0 15 15",
                      marginRight: 20,
                      marginLeft: 20,
                    }}
                  >
                    <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                  </svg>
                  {user.user}
                </button>
              </Link>

              <button
                className="text-xs text-gray-500 hidden md:inline-block"
                onClick={() => logOut()}
              >
                <p className="text-xs text-gray-400 mx-1"> Log out</p>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

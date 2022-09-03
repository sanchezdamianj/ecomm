import React,{useState} from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import Toggle from "./darkMode/ThemeToggle";
import { Link } from "react-router-dom";
const NavBar = () => {

  // const [search,setSearch] = useState('')

  // const handleChange = (event) =>{
  //   event.preventDefault()
  //   setSearch(event.target.value)
  //   console.log(search)
  // }
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
            <Link to="/">
              <div className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-xl ">
                <img
                  src={logo}
                  alt="loguito"
                  style={{ width: 24, height: 24, viewBox: "0 0 24 24" }}
                />
                Ecom
              </div>
            </Link>
          </div>
          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            {/* <input
              type="text"
              name='search'
              value={search}
              onChange={handleChange}
              placeholder="What are you looking for?"
              className="inline-block no-underline rounded-sm hover:text-black fill-current hover:text-black mr-8"
            /> */}

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

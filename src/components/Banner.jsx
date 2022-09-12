import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-[url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')] bg-center bg-cover h-auto py-24 px-10 object-fill">
        <div className="md:w-1/2">
          <p className="font-bold text-white uppercase">Services</p>
          <p className="text-3xl text-white font-bold">Products</p>
          <p className="text-2xl text-white mb-10 leading-none">
            Atractive Products 4 U!
          </p>
          <a
            href="#footer"
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-400 hover:pointer"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";
const NonValuesFound = () => {
  return (
    <>
    <div className='p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4'>
      <p className='shrink-0 h-12 w-12 text-slate-500'
      id="messageNotFound">
       No values found 
      </p>
      <Link to="/" className="text-xl font-medium text-black">
       <p className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Go to Home Page</p> 
      </Link>
      </div>
    </>
  );
};

export default NonValuesFound;

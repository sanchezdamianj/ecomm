import React from "react";

const Background = ({ children }) => {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-all">
        {children}
      </div>
    </>
  );
};

export default Background;

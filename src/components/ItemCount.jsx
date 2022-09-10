import React from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd, counter, setCounter, flag }) => {
  const decrement = () => {
    counter >= initial
      ? setCounter(counter - 1)
      : console.log("no negative stock ");
  };
  const increment = () => {
    counter < stock
      ? setCounter((counter) => counter + 1)
      : console.log("No puede superar el stock actual");
  };

  return (
    <>
      <div className="px-4 flex items-center justify-center">
        <button
          className="bg-orange-300 hover:bg-yellow-700 font-bold py-0 px-2 rounded-full"
          onClick={decrement}
        >
          -
        </button>
        <span className="py-2 mx-2 text-l font-bold ">{counter}</span>
        <button
          className="bg-blue-500 hover:bg-green-700 font-bold py-0 px-2 rounded-full"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div>
        <button
          type="submit"
          className="w-full mt-2 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={onAdd}
        >
          Add to bag
        </button>

        <Link to={"/cart"}>
          <button
            type="submit"
            className="w-full mt-2 flex items-center justify-center rounded-md border border-transparent bg-green-600 py-3 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Proceed to checkout
          </button>
        </Link>
      </div>
    </>
  );
};

export default ItemCount;

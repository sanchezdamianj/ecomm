import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    (counter < stock)? (setCounter(counter + 1) && onAdd(counter)): console.log('No puede superar el stock actual')
  };
  const decrement = () => {
    (counter > 0) ? setCounter(counter - 1) : console.log('no negative stock ');
  };

  return (
    <div className="py-6 px-4 flex items-center justify-center">
      <button className="bg-orange-500 hover:bg-yellow-700 font-bold py-2 px-4 rounded-full" onClick={decrement}>
        -
      </button>
      <div className="py-4 mx-4 text-xl">{counter}</div>
      <button className="bg-blue-500 hover:bg-green-700 font-bold py-2 px-4 rounded-full" onClick={increment}>
        +
      </button>
    </div>
  );
}

 
export default ItemCount;

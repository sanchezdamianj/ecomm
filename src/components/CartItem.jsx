import React, { useState } from "react";
import { useCartContext } from "./context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem, isUpdated } = useCartContext();
  const [itemOrderQuantity, setItemOrderQuatity] = useState(item.orderQuantity);

  const handleChange = (e) => {
    setItemOrderQuatity(e.target.value);
  };

  const decrement = () => {
    if (itemOrderQuantity > 1) {
      let itemQuantity = itemOrderQuantity - 1;
      setItemOrderQuatity(itemQuantity);
      isUpdated(item.id, itemQuantity);
    }
  };
  const increment = () => {
    let itemQuantity = itemOrderQuantity + 1
    setItemOrderQuatity(itemQuantity);
    isUpdated(item.id, itemQuantity);
  };

  return (
    <div className="container mx-auto mt-10 bg-gray-50 rounded-lg">
      <div className="flex shadow-md my-10">
        <div className="w-full bg-sky-50 px-10 py-10">
          <div className="flex mt-10 mb-5">
            <div className="w-24">
              <img className="h-24" src={item.image} alt="" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm text-gray-600 ">
                {item.title}
              </span>
              <span className="text-red-500 text-xs">{item.id}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </button>
            </div>
            {/* counter quantity */}
            <div className="flex justify-center w-1/5">
              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
                onClick={decrement}
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>

              <input
                className="mx-2 border text-gray-600  text-center w-8"
                type="text"
                value={itemOrderQuantity}
                onChange={() => handleChange()}
              />
              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
                onClick={increment}
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>

            <span className="text-center w-1/5 font-semibold text-sm text-gray-600 ">
              ${item.price}
            </span>
            <span className="text-center w-1/5 font-semibold text-sm text-gray-600 ">
              ${item.price * itemOrderQuantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
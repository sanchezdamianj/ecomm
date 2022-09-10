import React from "react";
import { CartItem } from "./CartItem";
import { useCartContext } from "./context/CartContext";

const Cart = () => {
  const { cart, cartTotal, cartQuantity } = useCartContext();

  return (
    <>
      <div className="container mx-auto mt-10 bg-gray-100">
        <div className="flex shadow-md my-10">
          <div className="w-full px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="text-gray-600 font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="text-gray-600 font-semibold text-2xl">
                {cartQuantity()} Products
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total: ${cartTotal()}
              </h3>
            </div>
          </div>
        </div>
      </div>
      
      {cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
       <div className="container mt-0">
        <div className="flex items-center justify-center shadow-md my-2">
          <div className="w-2/3  mx-auto bg-white px-5 py-5">
       <button
        type="submit"
        className="w-2/3 mt-0 mx-auto flex items-center justify-center rounded-md border border-transparent bg-green-600 py-3 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Checkout
      </button>
      </div>
      </div>
      </div>
    </>
  );
};

export default Cart;

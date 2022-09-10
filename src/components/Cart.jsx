import React from "react";
import { CartItem } from "./CartItem";
import { useCartContext } from "./context/CartContext";

const Cart = () => {
  const { cart, cartTotal, cartQuantity,emptyCart } = useCartContext();
  console.log(cart);

  return (
    <>
      <div className="container mx-auto mt-10 bg-gray-100">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartQuantity()} Products</h2>
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
      {(cart).map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </>
  );
};

export default Cart;

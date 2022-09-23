import React from "react";
import { Link } from "react-router-dom";
const ItemStock = ({ product }) => {
  return (
    <>
      <Link to={`/items/${product.id}`}>
        <div className="flex flex-col items-center rounded rounded-3xl px-2 py-2 bg-gray-200 ">
          <div key={product.id} className="flex flex-row sm:flex-col">
            <img
              className="h-52 w-32 object-fill xl:w-full lg:w-full sm:w-full rounded-3xl "
              src={product.thumbnail}
              alt="imag"
            />
            <div className="flex flex-col mx-2 ">
              <p className="pt-3 text-xs text-gray-500 ml-0">{product.title}</p>
              <p className="pt-2 text-black-400 text-xs flex items-center justify-start font-semibold">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default ItemStock;

import React, { useEffect, useState, useContext } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ItemCount from "../components/ItemCount";
import NoDataFound from "../components/NoDataFound";
import { requestCategory } from "../helpers/requestData";
import { CircularProgress, Alert, AlertIcon } from "@chakra-ui/react";
import { CartContext } from "../components/context/CartContext";

const ItemDetail = ({ item }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isInCart } = useContext(CartContext);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    requestCategory(item.category_id)
      .then((res) => res.json())
      .then((dataCat) => {
        setIsLoading(false);
        setCategories(dataCat.path_from_root);
      });
  }, [item]);

  const onAdd = () => {
    const itemToCart = {
      id: item.id,
      price: item.price,
      title: item.title,
      orderQuantity: quantity,
      image: item.thumbnail,
    };
    if (!isInCart(item.id)) {
      addToCart(itemToCart);
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return !isLoading ? (
    <>
      {!isLoading ? (
        <>
          <BreadCrumb categories={categories} />
        </>
      ) : (
        <>
          <NoDataFound />
        </>
      )}
      <div className="lg:h-2/3 bg-gray-100">
        <div className="mt-4 h-full">
          {/* <!-- Image gallery --> */}
          <div className="mx-auto mt-0 max-w-2l sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            {item.pictures && item.pictures.length >= 3 ? (
              <>
                <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img
                    src={item.pictures[0].url}
                    alt="Two ."
                    className="h-6/12 w-full object-cover object-center"
                  />
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-0">
                  <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <img
                      src={item.pictures[1].url}
                      alt="Model"
                      className="h-1/2 w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                  <img
                    src={item.pictures[2].url}
                    alt="Mode."
                    className="h-6/12 w-full object-cover object-center"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img
                    src={item.thumbnail}
                    alt="Two ."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-0">
                  <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <img
                      src={item.thumbnail}
                      alt="Model"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                  <img
                    src={item.thumbnail}
                    alt="Mode."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </>
            )}
          </div>
          {/* <!-- Product info --> */}
          <div className="mx-auto max-w-2xl px-4 pt-2 mt-8 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-0 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {item.title}
              </h1>
            </div>
            {/* <!-- Options --> */}
            <div className="mt-2 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight">$ {item.price}</p>
              {/* <!-- Reviews --> */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                  </div>
                  <div
                    href="2"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Available quantity {item.available_quantity}
                  </div>
                </div>
              </div>
              <ItemCount
                stock={item.available_quantity}
                initial="1"
                onAdd={onAdd}
                setCounter={setQuantity}
                counter={quantity}
                flag={flag}
              />
              <>
                {flag ? (
                  <>
                    <Alert status="warning">
                      <AlertIcon />
                      This Product is already in the basket, proceed to checkout
                    </Alert>
                  </>
                ) : (
                  <></>
                )}
              </>
            </div>
            <div className="py-10 mt-6 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* <!-- Description and details --> */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base ">{item.title}</p>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-sm font-medium ">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="grid min-h-screen place-items-center text-sm text-gray-900">
      <CircularProgress isIndeterminate color="green.300" />
    </div>
  );
};

export default ItemDetail;

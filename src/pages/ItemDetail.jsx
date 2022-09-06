import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ItemCount from "../components/ItemCount";
import NoDataFound from "../components/NoDataFound";
import { requestCategory } from "../helpers/requestData";
import { CircularProgress } from "@chakra-ui/react";

const ItemDetail = ({ item }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    requestCategory(item.category_id)
      .then((res) => res.json())
      .then((dataCat) => {
        setIsLoading(false);
        setCategories(dataCat.path_from_root);
        console.log(item);
      });
  }, [item]);

  // const starsRating = ({ item }) => {
  //   const rate = Number(item.installments.rate);
  //   let stars = 0;
  //   let from = 0;
  //   let to = 100;

  //   switch (from < rate < to) {
  //     case 0 < rate < 20:
  //       stars = 1;
  //       break;
  //     case 21 < rate < 40:
  //       stars = 2;
  //       break;
  //     case 41 < rate < 60:
  //       stars = 3;
  //       break;
  //     case 61 < rate < 80:
  //       stars = 4;
  //       break;
  //     default:
  //       stars = 5;
  //       break;
  //   }
  //   return stars;
  // };

  return !isLoading ? (
    <>
      {!isLoading ? (
        <>
          <BreadCrumb categories={categories} />
        </>
      ) : (
        <>
          {" "}
          <NoDataFound />
        </>
      )}
      <div className="lg:h-screen">
        <div className="mt-4">
          {/* <!-- Image gallery --> */}
          <div className="mx-auto mt-0 max-w-2l sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            {item.pictures ? (
              <>
                <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img
                    src={item.pictures[0].url}
                    alt="Two ."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-0">
                  <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                    <img
                      src={item.pictures[1].url}
                      alt="Model"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                  <img
                    src={item.pictures[2].url}
                    alt="Mode."
                    className="h-full w-full object-cover object-center"
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
                    {}

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

              <div className="mt-8">
                <ItemCount stock="10" initial="0" />
                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  //   onClick={onAdd}
                >
                  Add to bag
                </button>
              </div>
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
    <div className="grid h-48 place-items-center text-sm text-gray-900">
      Loading Detail ...
      <CircularProgress isIndeterminate color="green.300" />
    </div>
  );
};

export default ItemDetail;

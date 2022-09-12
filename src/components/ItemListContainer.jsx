import React, { useState, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";
import { requestSearch } from "../helpers/requestData";
import ItemList from "./ItemList";
import ItemGridNavContainer from "./ItemGridNavContainer";
import Banner from "./Banner";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    requestSearch(id)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return !isLoading ? (
    <>
      <Banner />
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <>
            {id === undefined || id === null ? (
              <ItemGridNavContainer productType={"Top Sale Products"} />
            ) : (
              <ItemGridNavContainer productType={"Products"} />
            )}
          </>

          <ItemList products={products} />
        </div>
      </section>
    </>
  ) : (
    <div className="grid h-48 place-items-center">
      Loading Products ...
      <CircularProgress isIndeterminate color="green.200" />
    </div>
  );
};

export default ItemListContainer;

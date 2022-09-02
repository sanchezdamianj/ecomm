import React, { useState, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";
// import { requestData } from "../helpers/requestData";
import ItemList from "./ItemList";
import ItemGridNavContainer from "./ItemGridNavContainer";

const basePath = "https://api.mercadolibre.com";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // requestData(basePath)
    fetch(`${basePath}/sites/MLA/search?q=ninja&limit=4`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("End");
      });
  }, []);

  return !isLoading ? (
    <>
      <div>
        <h2 style={{ color: "red", textAlign: "center" }}>{greeting}</h2>

        <section className="py-8">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <ItemGridNavContainer />
            <ItemList products={products} />
          </div>
        </section>
      </div>
    </>
  ) : (
    <div className="grid h-48 place-items-center">
      Loading Products ...
      <CircularProgress isIndeterminate color="green.200" />
    </div>
  );
};

export default ItemListContainer;

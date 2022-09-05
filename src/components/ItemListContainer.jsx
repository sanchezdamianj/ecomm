import React, { useState, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";
import { requestData,requestSearch} from "../helpers/requestData";
import ItemList from "./ItemList";
import ItemGridNavContainer from "./ItemGridNavContainer";
import Banner from "./Banner";
import { useParams } from "react-router-dom";

const ItemListContainer = (keyword) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    requestData()
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results.splice(0, 9));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("End");
      });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    requestSearch(id)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return !isLoading ? (
    <>
      <Banner />
      <section className="py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 ">
          <ItemGridNavContainer />
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

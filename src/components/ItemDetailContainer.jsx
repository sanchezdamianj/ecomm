import React, { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/spinner";
import ItemDetail from "../pages/ItemDetail";
import BreadCrumb from "./BreadCrumb";
const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const parseString = "9";
  const basePath = "https://api.mercadolibre.com";

  useEffect(() => {
    setIsLoading(true);
    fetch(`${basePath}/sites/MLA/search?q=${parseString}&limit=1`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setItem(data.results[0]);
      });
  }, []);

  useEffect(() => {
    
      fetch(`${basePath}/categories/MLA14407`)
        .then((res) => res.json())
        .then((dataCat) => {
          setCategories(dataCat.path_from_root)
        });
  }, [item]);

  return !isLoading ? (
    <>
      <BreadCrumb categories={categories} />
      <ItemDetail item={item} />
    </>
  ) : (
    <>
      <div className="spinner">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="lg"
        />
      </div>
    </>
  );
};

export default ItemDetailContainer;

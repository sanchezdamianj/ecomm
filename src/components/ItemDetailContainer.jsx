import React, { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/spinner";
import ItemDetail from "../pages/ItemDetail";
import {basePath} from '../data/data'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${basePath}/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setItem(data);
      });
  }, [id]);

  return !isLoading ? (
    <>
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

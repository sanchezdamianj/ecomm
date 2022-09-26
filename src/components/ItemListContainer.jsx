import React, { useState, useEffect } from "react";
import { CircularProgress } from "@chakra-ui/react";
import { requestSearch } from "../helpers/requestData";
import ItemList from "./ItemList";
import ItemListStock from "./ItemListStock";
import ItemGridNavContainer from "./ItemGridNavContainer";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [stock, setStock] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const productsRef = collection(db, "stock");
    getDocs(productsRef)
      .then((response) => {
        const productsDB = response.docs.map((doc) => ({
          id: doc.id, 
          ...doc.data(),
        }));
        setStock(productsDB);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
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
        <ItemListStock stock={stock} />

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
    <div className="grid min-h-screen place-items-center text-md text-bold">
      <CircularProgress isIndeterminate color="green.300" />
    </div>
  );
};

export default ItemListContainer;

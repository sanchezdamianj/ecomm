import React, { useState, useEffect } from "react";
import { Progress } from "@chakra-ui/react";
import ItemDetail from "../pages/ItemDetail";
import { requestDetail } from "../helpers/requestData";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [itemDoc, setItemDoc] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    requestDetail(id)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setItem(data);
      });
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    const docRef = doc(db, "stock", id);
    getDoc(docRef).then((doc) => {
      setItemDoc({ id: doc.id, ...doc.data() });
    });
  }, [id]);

  return !isLoading ? (
    <>
      {item.id ? (
        <ItemDetail item={item} />
      ) : (
        itemDoc && <ItemDetail item={itemDoc} />
      )}
    </>
  ) : (
    <>
      <div className="min-h-screen text-md text-bold">
        <Progress size="xs" isIndeterminate />
      </div>
    </>
  );
};

export default ItemDetailContainer;

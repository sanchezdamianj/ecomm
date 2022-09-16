import React, { useState, useEffect } from "react";
import { Progress } from "@chakra-ui/react";
import ItemDetail from "../pages/ItemDetail";
import { requestDetail } from "../helpers/requestData";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
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

  return !isLoading ? (
    <>
      <ItemDetail item={item} />
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

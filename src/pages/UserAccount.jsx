import React, { useContext, useState } from "react";
import { LoginContext } from "../components/context/LoginContext";
import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import swal from "sweetalert";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const { logOut, productUploadSuccess } = useContext(LoginContext);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    available_quantity: "",
    category_id: "",
    price: "",
    thumbnail: "",
    condition: "",
    sold_quantity: "",
  });

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newItem = {
      title: inputs.title,
      available_quantity: inputs.available_quantity,
      category_id: inputs.category_id,
      price: inputs.price,
      thumbnail: inputs.thumbnail,
      condition: inputs.condition,
      sold_quantity: inputs.sold_quantity,
    };
    const newStockRef = collection(db, "newStock");
    if (validateItem(newItem)) {
      addDoc(newStockRef, newItem).then((doc) => productUploadSuccess(doc.id));
      navigate({ pathname: "/" });
    }
  };

  const validateItem = ({
    title,
    available_quantity,
    category_id,
    price,
    thumbnail,
    condition,
  }) => {
    if (
      title === "" ||
      available_quantity < 0 ||
      category_id === "" ||
      price <= 0 ||
      thumbnail === ""
    ) {
      swal({
        title: "Wrong data",
        icon: "error",
      });
      return false;
    } else return true
  };

  return (
    <>
      <h1 className="mt-10 flex items-center justify-center font-bold text-gray-700">
        Load a Product to the Store
      </h1>
      <div className="flex items-center justify-center mx-auto w-1/2">
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={inputs.title}
            name="title"
            onChange={handleInputChange}
            isRequired
          />
          <FormHelperText>Title Allowed</FormHelperText>

          <FormLabel>Available Quantity</FormLabel>
          <Input
            type="text"
            value={inputs.available_quantity}
            onChange={handleInputChange}
            isRequired
            name="available_quantity"
          />

          <FormHelperText>Greather than 0</FormHelperText>

          <FormLabel>Category ID</FormLabel>
          <Input
            type="text"
            value={inputs.category_id}
            onChange={handleInputChange}
            isRequired
            name="category_id"
          />
          <FormHelperText>
            Enter the category id related to the DDBB categories.
          </FormHelperText>

          <FormLabel>Price</FormLabel>
          <Input
            type="text"
            value={inputs.price}
            onChange={handleInputChange}
            isRequired
            name="price"
          />
          <FormHelperText>Minimum price must be more than 0.</FormHelperText>

          <FormLabel>Thumbnail Image URL</FormLabel>
          <Input
            type="text"
            value={inputs.thumbnail}
            onChange={handleInputChange}
            isRequired
            name="thumbnail"
          />
          <FormHelperText>Check the correct image's path.</FormHelperText>

          <FormLabel>Condition</FormLabel>
          <Input
            type="text"
            value={inputs.condition}
            onChange={handleInputChange}
            isRequired
            name="condition"
          />
          <FormHelperText>new or used</FormHelperText>

          <FormLabel>Sold Quantity</FormLabel>
          <Input
            type="text"
            value={inputs.sold_quantity}
            onChange={handleInputChange}
            isRequired
            name="sold_quantity"
          />
          <FormHelperText>From 0 to any.</FormHelperText>
        </FormControl>
      </div>
      <button
        onClick={handleSubmit}
        className="flex items-center justify-center mx-auto w-1/2
        mt-6 text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-xs px-2 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
      >
        Save
      </button>
      <button
        className="mt-2 text-lg text-gray-500 flex items-center justify-center mx-auto w-1/2"
        onClick={() => logOut()}
      >
        <p className="text-xs text-gray-400 mx-2 py-2"> Log out</p>
      </button>
    </>
  );
};

export default UserAccount;

import React, { useState } from "react";
import { useCartContext } from "../components/context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Checkout = () => {
  const { cart, cartTotal, emptyCart, purchaseSuccess } = useCartContext();
  const countries = ["EEUU", "ARGENTINA", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");
  const navigate = useNavigate();
  let error = [];

  const expresions = {
    buyerName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters & spaces, tildes.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //email format.
    cardNumber: /^\d{16,17}$/, // 16-17 numbers,
    dueDate: /^.{4,5}$/, // 5 digits.
    cvc: /^\d{3,4}$/, // 3-4 numebrs.
    zip: /^\d{4,6}$/, // 4-6 numbers.
  };

  const [values, setValues] = useState({
    buyerName: "",
    email: "",
    cardNumber: "",
    dueDate: "",
    cvc: "",
    zip: "",
  });

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer: values,
      country: country,
      items: cart,
      totalAmount: cartTotal(),
    };
    validateForm();
    const ordersRef = collection(db, "orders");
    if (error.length === 0) {
      addDoc(ordersRef, order).then((doc) => purchaseSuccess(doc.id));

      navigate({ pathname: "/" });
      emptyCart();
      error = [];
    } else {
      swal({
        title: "Wrong data",
        text: `Errors: ${error[0]}`,
        icon: "error",
      });
    }
  };

  const validateForm = () => {
    if (!expresions.email.test(values.email)) {
      error.push("wrong email");
    }
    if (!expresions.buyerName.test(values.buyerName)) {
      error.push("wrong username");
    }
    if (!expresions.cardNumber.test(values.cardNumber)) {
      error.push("wrong card");
    }
    if (!expresions.dueDate.test(values.dueDate)) {
      error.push("wrong due date");
    }
    if (!expresions.cvc.test(values.cvc)) {
      error.push("wrong cvc");
    }
    if (!expresions.zip.test(values.zip)) {
      error.push("wrong zip");
    }
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
            <Link to={"/cart"}>
              <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                <svg
                  className="fill-stroke"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.91681 7H11.0835"
                    stroke="currentColor"
                    strokeWidth="0.666667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.91681 7L5.25014 9.33333"
                    stroke="currentColor"
                    strokeWidth="0.666667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.91681 7.00002L5.25014 4.66669"
                    stroke="currentColor"
                    strokeWidth="0.666667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm leading-none">Back</p>
              </button>
            </Link>
            <p className="text-3xl lg:text-4xl font-semibold leading-7 px-8 lg:leading-9 text-gray-800">
              Checkout
            </p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <form
              className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5"
              onSubmit={handleSubmit}
            >
              <button className="border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                <div>
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-base leading-4">Pay</p>
                </div>
              </button>

              <hr className="border w-full" />
              <div className="flex flex-row justify-center items-center mt-6">
                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">
                  or pay with card
                </p>
              </div>
              <hr className="border w-full" />
              <label className="mt-8 mb-2 text-base leading-4 text-gray-800">
                Email
              </label>
              <input
                className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type={"email"}
                name="email"
                placeholder="Enter your email"
                onChange={handleInputChange}
                value={values.email}
              />
              <label className="mt-8 text-base leading-4 text-gray-800">
                Card details
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type={"text"}
                    placeholder="0000 1234 6549 15151"
                    onChange={handleInputChange}
                    name="cardNumber"
                    value={values.cardNumber}
                  />
                </div>
                <div className="flex-row flex">
                  <input
                    className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type={"text"}
                    placeholder="MM/YY"
                    name="dueDate"
                    maxLength={5}
                    required
                    onChange={handleInputChange}
                    value={values.dueDate}
                  />
                  <input
                    className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type={"text"}
                    placeholder="CVC"
                    required
                    maxLength={4}
                    name="cvc"
                    onChange={handleInputChange}
                    value={values.cvc}
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Name on card
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type={"text"}
                    placeholder="Name on card"
                    name="buyerName"
                    onChange={handleInputChange}
                    value={values.buyerName}
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Country or region
              </label>
              <div className="mt-2 flex-col">
                <div className="relative">
                  <button
                    className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                    type={"text"}
                    onChange={handleInputChange}
                    value={country}
                    name="country"
                  >
                    {country}
                  </button>
                  <svg
                    onClick={() => setMenu(!menu)}
                    className={
                      "transform  cursor-pointer absolute top-4 right-4 " +
                      (menu ? "rotate-180" : "")
                    }
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5.75L8 10.25L12.5 5.75"
                      stroke="#27272A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    className={
                      "mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " +
                      (menu ? "block" : "hidden")
                    }
                  >
                    {countries.map((country) => (
                      <div
                        key={country}
                        className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                        onClick={changeText}
                      >
                        {country}
                      </div>
                    ))}
                  </div>
                </div>

                <input
                  className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type={"text"}
                  placeholder="ZIP"
                  name="zip"
                  onChange={handleInputChange}
                  value={values.zip}
                />
              </div>

              <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                <div>
                  <p className="text-base leading-4">Pay ${cartTotal()}</p>
                </div>
              </button>
            </form>

            <div className="xl:w-6/12 flex flex-col sm:flex-col xl:flex-col justify-center items-center sm:py-0 xl:py-10 px-10 xl:w-full">
              <p className="text-current text-xl text-left py-2 font-bold">
                Review your order
              </p>
              {cart.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="flex flex-row justify-start items-start w-full space-y-4 my-0 border"
                  >
                    <img
                      src={item.image}
                      alt="pic"
                      className="h-44 w-32 xl:w-full lg:w-full sm:w-full rounded-3xl "
                    />
                    <div className="text-xl md:text-sm leading-normal text-gray-800 mx-4">
                      {item.orderQuantity}
                    </div>
                    <div className="text-xl md:text-sm leading-normal text-gray-800 mx-0">
                      x {item.title}
                      <p className="text-base font-semibold leading-none text-md text-gray-600 my-2">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <hr className="border w-1/2" />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

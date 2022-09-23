import React, { useState } from "react";
import CartItem  from "../components/CartItem";
import { useCartContext } from "../components/context/CartContext";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, cartTotal, cartQuantity, emptyCart } = useCartContext();

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);
  const navigate = useNavigate();

  const handleClick = () =>{
    if(cart.length !== 0){
      navigate({pathname: '/checkout'})
    } else{
      navigate({pathname: '/'})
    }
  }

  return (
    <>
      <div className="container mx-auto mt-10 bg-gray-100 text-stone-600">
        <div className="flex shadow-md my-10">
          <div className="w-full px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="text-gray-600 font-semibold text-2xl">
                Shopping Cart
              </h1>
              <h2 className="text-gray-600 font-semibold text-2xl">
                {cartQuantity()} Products
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total: ${cartTotal()}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
      {console.log(cart)}
      <div className="container mt-0">
        <div className="flex items-center justify-center shadow-md my-2 gap-x-px">
          <div className="w-screen flex items-center mx-auto bg-gray-100 px-5 py-5">
            <button
              type="submit"
              onClick={handleClick}
              className="w-4/12 mt-0 mx-auto rounded-md border border-transparent bg-green-500 py-3 text-base font-small text-sm text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 px-0 "
            >
              Checkout
            </button>

            <button
              type="submit"
              className="w-4/12 mt-0 mx-auto rounded-md border border-transparent bg-orange-400 py-3 text-base font-small text-sm text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 px-0 "
              onClick={() => {
                setOverlay(<OverlayTwo />);
                onOpen();
                emptyCart();
              }}
            >
              Empty cart
            </button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader className="flex items-center justify-center">
                  You've cleaned your basket
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p className="text-sm flex items-center justify-center">
                    Let's got to shop fancy stuffs!
                  </p>
                </ModalBody>
                <ModalFooter>
                  <button
                    className="bg-red-400 rounded px-10 font-small text-sm text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={() => {
                      onClose();
                      navigate({ pathname: "/" });
                    }}
                  >
                    Close
                  </button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

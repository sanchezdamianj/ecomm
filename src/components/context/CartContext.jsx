import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
    let noRepeatedItems = cart.filter((element, index) => {
        return cart.indexOf(element) === index;
    });
    console.log(cart)
    console.log(noRepeatedItems)
    setCart(noRepeatedItems)
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.orderQuantity, 0);
  };
  const cartTotal = () =>{
    return cart.reduce((acc,item) => acc + item.orderQuantity * item.price,0)
  }
  const removeItem = (id) =>{
    setCart(cart.filter((item) => item.id !== id))
  }
  const emptyCart = () =>{
    return null
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        cartQuantity,
        cartTotal,
        removeItem,
        emptyCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

export const useCartContext = () =>{ return useContext(CartContext)}
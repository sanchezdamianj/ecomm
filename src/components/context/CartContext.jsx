import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if(!isInCart(item.id)){
        setCart([...cart, item]);
    } else {
  
        setCart([cart, item])
    }
    localStorage.getItem("cart", JSON.stringify(cart));
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.orderQuantity, 0);
  };
  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.orderQuantity * item.price, 0);
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const emptyCart = () =>{
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        cartQuantity,
        cartTotal,
        removeItem,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

export const useCartContext = () => {
  return useContext(CartContext);
};

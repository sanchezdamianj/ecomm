import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  const addToCart = (item) => {
    if (!isInCart(item.id)) {
      setCart([...cart, item]);
    } else {
      setCart([cart, item]);
    }
    localStorage.getItem("cart", JSON.stringify(cart));
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };
  const isUpdated = (id, quantity) => {
    let itemUpdated = cart.find((item) => item.id === id);
    itemUpdated.orderQuantity = quantity;
    setTotalCart(cartTotal());
  };

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.orderQuantity, 0);
  };
  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.orderQuantity * item.price, 0);
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    if (cart !== []) {
      setTotalCart(cartTotal());
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

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
        isUpdated,
        totalCart
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

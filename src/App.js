import React from "react";
import Background from "./components/darkMode/Background";
import CartProvider from "./components/context/CartContext";
import AppRoutes from "./router/AppRoutes";
import { LoginProvider } from "./components/context/LoginContext";

function App() {
  return (
    <>
      <LoginProvider>
        <CartProvider>
          <Background>
            <AppRoutes />
          </Background>
        </CartProvider>
      </LoginProvider>
    </>
  );
}

export default App;

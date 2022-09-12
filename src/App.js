import React from "react";
import { ThemeProvider } from "./components/darkMode/ThemeContext";
import Background from "./components/darkMode/Background";
import CartProvider from "./components/context/CartContext";
import AppRoutes from "./router/AppRoutes";
import { LoginProvider } from "./components/context/LoginContext";

function App() {
  return (
    <>
      <LoginProvider>
        <CartProvider>
          <ThemeProvider>
            <Background>
              <AppRoutes />
            </Background>
          </ThemeProvider>
        </CartProvider>
      </LoginProvider>
    </>
  );
}

export default App;

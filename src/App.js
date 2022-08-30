import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/darkMode/ThemeContext";
import Background from "./components/darkMode/Background";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./pages/ItemDetail";

function App() {
  return (
    <>
       <ThemeProvider>
        <Background>
          <NavBar />
          <ItemDetail />
          <ItemListContainer greeting={'Message inside of the container'} />
          <Footer />
       </Background>
      </ThemeProvider> 
    </>
  );
}

export default App;

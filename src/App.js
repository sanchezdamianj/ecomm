import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./components/darkMode/ThemeContext";
import Background from "./components/darkMode/Background";
import ItemListContainer from "./components/Home/ItemListContainer";

function App() {
  return (
    <>
       <ThemeProvider>
        <Background>
          <NavBar />
          <ItemListContainer greeting={'Message inside of the container'} />
          <Footer />
       </Background>
      </ThemeProvider> 
    </>
  );
}

export default App;

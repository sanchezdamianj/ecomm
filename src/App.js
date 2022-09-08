import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/darkMode/ThemeContext";
import Background from "./components/darkMode/Background";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NoDataFound from './components/NoDataFound'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Background>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/items/search/:id" element={<ItemListContainer />} />
              <Route path="/items/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<NoDataFound />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </Background>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

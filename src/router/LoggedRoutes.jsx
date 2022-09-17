import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";
import Checkout from "../pages/Checkout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

const LoggedRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/items/search/:id" element={<ItemListContainer />} />
        <Route path="/items/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default LoggedRoutes;

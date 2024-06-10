import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/singlePage/ProductDetail";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;

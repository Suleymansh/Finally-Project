import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../common/Footer";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Header from "../pages/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";

import Shop from "../pages/Shop";
import Review from "../pages/Review";
import { CartProvider } from "react-use-cart";
import AppContextProvider from "../pages/context/appContext";
import Favorites from "../pages/Favorites";
import Navs from "../pages/Navs";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";
import Basket from "../pages/Basket";


const AppRouters = () => {
  return (
    <div>
      <BrowserRouter>
        <AppContextProvider>
          <CartProvider>
            <Navs />
            <Header />
            <Basket />

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/review" element={<Review />}></Route>

              <Route path="/favorites" element={<Favorites />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </CartProvider>
        </AppContextProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default AppRouters;

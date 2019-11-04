import React from "react";
import "./reset.css";
import "./App.css";

import Scroll from "./components/Nav/Scroll.js";
import Header from "./components/Nav/Header.js";
import Hero from "./components/Hero/Hero.js";
import Collection from "./components/Collection/Collection.js";
import Product from "./components/Product/Product.js";
import Philosophy from "./components/Philosophy/Philosophy.js";
import Newsletter from "./components/Newsletter/Newsletter.js";
import Footer from "./components/Footer/Footer.js";

// import "../../main.js";

function App() {
  return (
    <>
      <Scroll></Scroll>
      <Header></Header>
      <Hero></Hero>
      <Collection></Collection>
      <Product></Product>
      <Philosophy></Philosophy>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;

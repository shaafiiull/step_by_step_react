import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./GroceryStyle.css";
import MainContent from "./MainContent";

const GroceryApp = () => {
  return (
    <div className="GroceryApp">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
};

export default GroceryApp;

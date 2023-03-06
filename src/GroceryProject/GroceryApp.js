import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./GroceryStyle.css";
import MainContent from "./MainContent";
import useItems from "./useItems";

const GroceryApp = () => {
  const [items, setItems] = useItems();
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shopping-list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shopping-list", JSON.stringify(listItems));
  };
  return (
    <div className="GroceryApp">
      <Header items={items}></Header>
      <MainContent
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></MainContent>
      <Footer></Footer>
    </div>
  );
};

export default GroceryApp;

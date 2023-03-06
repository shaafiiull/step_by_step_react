import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./GroceryStyle.css";
import MainContent from "./MainContent";

import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import getSavedGroceryCart from "./getSavedGroceryCart";

const GroceryApp = () => {
  const [items, setItems] = useState(JSON.parse(getSavedGroceryCart()));

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    const cartItems = listItems.filter((item) => item.checked === true);
    localStorage.setItem("grocery-shopping-cart", JSON.stringify(cartItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("grocery-shopping-cart", JSON.stringify(listItems));
  };
  const [newItem, setNewItem] = useState("");
  const handleNewItem = (e) => {
    e.preventDefault();
    const addedItem = newItem;
    if (/[a-zA-z]+/.test(addedItem)) {
      addItemToTheList(addedItem);
    }
  };

  const addItemToTheList = (item) => {
    const existedItems = [...items];
    if (item) {
      const newItem = {};
      newItem.id =
        Math.floor(Math.random() * 100) * Math.floor(Math.random() * 999);
      newItem.checked = false;
      newItem.item = item;
      existedItems.push(newItem);
      setItems(existedItems);
      console.log(newItem);
      setNewItem("");
    }
  };
  const [search, setSearch] = useState("");
  return (
    <div className="GroceryApp">
      <Header items={items}></Header>
      <SearchItem search={search} setSearch={setSearch}></SearchItem>
      <AddItem
        handleNewItem={handleNewItem}
        newItem={newItem}
        setNewItem={setNewItem}
      ></AddItem>
      <MainContent
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></MainContent>
      <Footer></Footer>
    </div>
  );
};

export default GroceryApp;

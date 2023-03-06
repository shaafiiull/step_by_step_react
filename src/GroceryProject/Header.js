import React from "react";
import "./GroceryStyle.css";
import useItems from "./useItems";

const Header = (props) => {
  const { items } = props;
  const cartItems = items.filter((item) => item.checked === true);
  return (
    <header className="groceryHeader">
      <h1>
        Grocery List of {items.length} {items.length > 1 ? "items" : "item"}
      </h1>
      <p>
        You bought: {cartItems.length} {cartItems.length > 1 ? "items" : "item"}
      </p>
    </header>
  );
};

export default Header;

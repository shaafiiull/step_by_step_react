import React from "react";

import "./GroceryStyle.css";
import ItemList from "./ItemList";

const MainContent = (props) => {
  const { handleCheck, handleDelete, items } = props;

  return (
    <main className="groceryMain">
      <ItemList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></ItemList>
      <h1>{items.length <= 0 && "NO items available"}</h1>
    </main>
  );
};

export default MainContent;

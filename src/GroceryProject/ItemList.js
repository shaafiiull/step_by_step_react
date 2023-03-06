import React from "react";

import SingleItem from "./SingleItem";
const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className="itemsList">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        ></SingleItem>
      ))}
    </ul>
  );
};

export default ItemList;

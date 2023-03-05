import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./GroceryStyle.css";

const MainContent = () => {
  const [items, setItem] = useState([
    {
      id: "6404b436d3aeeea0d961c3b1",
      checked: false,
      item: "Lidia Morris",
    },
    {
      id: "6404b436f5de945957a6d21b",
      checked: false,
      item: "Carson Saunders",
    },
    {
      id: "6404b4366d21517f1bf2e561",
      checked: false,
      item: "Yvette Pacheco",
    },
    {
      id: "6404b43660a253215f7c2e3a",
      checked: false,
      item: "Horton Petty",
    },
    {
      id: "6404b4365ce0850eb3b4eec5",
      checked: false,
      item: "Logan Bishop",
    },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItems);
    localStorage.setItem("shopping-list", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItem(listItems);
    localStorage.setItem("shopping-list", JSON.stringify(listItems));
  };
  return (
    <main className="groceryMain">
      <ul className="itemsList">
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
              style={item.checked ? { color: "red" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
            ></FaTrashAlt>
          </li>
        ))}
      </ul>
      <h1>{items.length <= 0 && "NO items available"}</h1>
    </main>
  );
};

export default MainContent;

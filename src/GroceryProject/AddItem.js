import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ handleNewItem, newItem, setNewItem }) => {
  return (
    <form className="addForm" onSubmit={handleNewItem}>
      <label htmlFor="addItem">AddItem</label>
      <input
        type="text"
        autoFocus
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">
        <FaPlus></FaPlus>
      </button>
    </form>
  );
};

export default AddItem;

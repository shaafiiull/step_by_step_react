import React from "react";
import "./GroceryStyle.css";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="groceryFooter">
      <p>Copyright @ {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;

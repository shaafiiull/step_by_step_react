import React from "react";

const RandomName = () => {
  const names = ["Shams", "Akash", "Bipul"];
  const getRandomName = () => {
    let index = Math.floor(Math.random() * 3);
    return names[index];
  };
  return <div>Hello {getRandomName()}</div>;
};

export default RandomName;

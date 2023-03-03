import React from "react";

const ListRendering = () => {
  const nameList = ["Apple", "Orange", "Banana"];
  const nameListLi = nameList.map((name, index) => <li key={index}>{name}</li>);
  return (
    <div>
      {/*     {nameList.map((name, index) => (
        <li key={index}>{name}</li>
      ))} */}
      <ol>{nameListLi}</ol>
    </div>
  );
};

export default ListRendering;

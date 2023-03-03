import React from "react";

const NonJSXElement = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "This is heading without JSX"),
    React.createElement("p", null, "Paragraph of non jsx component"),
  ]);
};

export default NonJSXElement;

import { useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([
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

  return [items, setItems];
};

export default useItems;

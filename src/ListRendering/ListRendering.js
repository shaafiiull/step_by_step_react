import React from "react";
import Person from "./Person";

const ListRendering = () => {
  /*   const nameList = ["Apple", "Orange", "Banana"];
  const nameListLi = nameList.map((name, index) => <li key={index}>{name}</li>); */
  const persons = [
    {
      _id: "640244a848663a3fa047d873",
      age: 40,
      name: "Whitehead Mosley",
      company: "VELOS",
      email: "whiteheadmosley@velos.com",
    },
    {
      _id: "640244a8423f4a10553ebe5f",
      age: 36,
      name: "Mcleod Robinson",
      company: "IMKAN",
      email: "mcleodrobinson@imkan.com",
    },
    {
      _id: "640244a8d2b66730b42305aa",
      age: 38,
      name: "Morrow Roberts",
      company: "ZEDALIS",
      email: "morrowroberts@zedalis.com",
    },
    {
      _id: "640244a85969b0d3c314e766",
      age: 28,
      name: "Strickland Martin",
      company: "ACLIMA",
      email: "stricklandmartin@aclima.com",
    },
    {
      _id: "640244a83df017ee7ba2bb21",
      age: 20,
      name: "William Brady",
      company: "MOBILDATA",
      email: "williambrady@mobildata.com",
    },
  ];
  const personList = persons.map((person) => (
    <Person person={person} key={person._id}></Person>
  ));
  return (
    <div>
      {/*     {nameList.map((name, index) => (
        <li key={index}>{name}</li>
      ))} */}
      {personList}
    </div>
  );
};

export default ListRendering;

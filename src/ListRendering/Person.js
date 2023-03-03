import React from "react";
import styles from "./ListRendering.module.css";
const Person = (props) => {
  const { name, email } = props.person;
  return (
    <div className={styles.person}>
      <h1>{name}</h1>
      <p>Email: {email}</p>
    </div>
  );
};

export default Person;

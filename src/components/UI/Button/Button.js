import React from "react";
import styles from "./Button.css";

const Button = props => {
  return (
    <button className={styles.Button} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
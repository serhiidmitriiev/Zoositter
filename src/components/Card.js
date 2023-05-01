import React from "react";

import styles from "../styles/Card.module.css";

function Card({ email, first_name, last_name, gender, id, status }) {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.info}>
        <h1>
          {first_name} {last_name}
        </h1>
        <h2>{gender}</h2>
        <h3>{status}</h3>
        <h4>{email}</h4>
      </div>
    </div>
  );
}

export default Card;

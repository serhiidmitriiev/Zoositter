import React from "react";
import image from "../assets/People.svg.png";

import styles from "../styles/Card.module.css";

function CardOwners({
  email,
  first_name,
  last_name,
  pet,
  quantity,
  dateFrom,
  dateTo,
  id,
}) {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.info}>
        <img
          src={image}
          alt="customer"
          style={{ height: "100px", width: "100px" }}
        />
        <h1>
          {first_name} {last_name}
        </h1>
        <h2>{pet}</h2>
        <h2>{quantity}</h2>
        <h3>{dateFrom}</h3>
        <h3>{dateTo}</h3>
        <h4>{email}</h4>
      </div>
    </div>
  );
}

export default CardOwners;

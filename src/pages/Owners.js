import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import CardOwners from "../components/CardOwners";

function Owners() {
  const [owners, setOwners] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/owners")
      .then((res) => res.json())
      .then((data) => {
        setOwners(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <h1>OWNERS</h1>
      {owners &&
        owners.map((owner) => (
          <CardOwners
            key={owner._id}
            id={owner._id}
            first_name={owner.first_name}
            last_name={owner.last_name}
            pet={owner.pet}
            quantity={owner.quantity}
            dateFrom={owner.dateFrom}
            dateTo={owner.dateTo}
          />
        ))}
    </Layout>
  );
}

export default Owners;

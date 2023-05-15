import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import CardSitters from "../components/CardSitters";

function Sitters() {
  const [sitters, setSitters] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/sitters")
      .then((res) => res.json())
      .then((data) => setSitters(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <h1>SITTERS</h1>
      {sitters &&
        sitters.map((sitter) => (
          <CardSitters
            key={sitter._id}
            id={sitter._id}
            first_name={sitter.first_name}
            last_name={sitter.last_name}
            email={sitter.email}
            status={sitter.status}
            gender={sitter.gender}
          />
        ))}
    </Layout>
  );
}

export default Sitters;

import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

function Home() {
  const [info, setInfo] = useState();
  useEffect(() => {
    fetch("http://localhost:3500/sitters")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(info);
  return (
    <Layout>
      <p className={styles.info}>
        Our Platform allows pet owners to find a petsitter while travelling to
        another country or moving to another city. If you are kind and love
        animals you can fill the form and become someone who cares about our
        pets.
      </p>
      {info &&
        info.map((sitter) => (
          <Card
            key={sitter.id}
            first_name={sitter.first_name}
            last_name={sitter.last_name}
            email={sitter.email}
            id={sitter.id}
            status={sitter.status}
            gender={sitter.gender}
          />
        ))}
      <h1>jj</h1>
    </Layout>
  );
}

export default Home;

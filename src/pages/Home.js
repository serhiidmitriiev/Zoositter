import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import CardSitters from "../components/CardSitters";
import styles from "../styles/Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
  const [info, setInfo] = useState();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch("http://localhost:3000/sitters")
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
      {info && (
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {info.map((sitter) => (
            <CardSitters
              key={sitter.id}
              first_name={sitter.first_name}
              last_name={sitter.last_name}
              email={sitter.email}
              id={sitter.id}
              status={sitter.status}
              gender={sitter.gender}
            />
          ))}
        </Carousel>
      )}
    </Layout>
  );
}

export default Home;

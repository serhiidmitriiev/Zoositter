import React, { useState } from "react";
import Layout from "../components/Layout";

function Login() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pet, setPet] = useState();
  const [quantity, setQuantity] = useState();
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  const fNameHandler = (e) => {
    setFname(e.target.value);
  };
  const lNameHandler = (e) => {
    setLname(e.target.value);
  };
  const petHandler = (e) => {
    setPet(e.target.value);
  };
  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };
  const dateFromHandler = (e) => {
    setDateFrom(e.target.value);
  };
  const dateToHandler = (e) => {
    setDateTo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname, lname, pet, quantity);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>

        <input
          type="text"
          id="fname"
          name="fname"
          value={fname}
          onChange={fNameHandler}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lname}
          onChange={lNameHandler}
        />
        <br />
        <label htmlFor="pets">Choose a pet</label>
        <select name="pet" id="pets" value={pet} onChange={petHandler}>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="fish">Fish</option>
          <option value="monkey">Monkey</option>
        </select>
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={quantityHandler}
        />
        <br />
        <label htmlFor="datefr">Date from:</label>
        <input
          type="date"
          id="datefr"
          name="date"
          value={dateFrom}
          onChange={dateFromHandler}
        />
        <br />
        <label htmlFor="dateto">Date to:</label>
        <input
          type="date"
          id="dateto"
          name="date"
          value={dateTo}
          onChange={dateToHandler}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}

export default Login;

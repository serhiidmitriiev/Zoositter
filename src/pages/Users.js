import React, { useState } from "react";
import Layout from "../components/Layout";
import store from "../app/store";
import styles from "../styles/Form.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";

const user = store.getState()[0] ? store.getState()[0] : null;
function Users() {
  const [name, setName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [pet, setPet] = useState(user.pet);
  const [quantity, setQuantity] = useState(user.quantity);
  const [dateFrom, setDateFrom] = useState(user.dateFrom);
  const [dateTo, setDateTo] = useState(user.dateTo);

  console.log("store in users", store.getState()[0].first_name);

  const handleFirstName = (e) => {
    setName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePet = (e) => {
    setPet(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleDateFrom = (e) => {
    setDateFrom(e.target.value);
  };
  const handleDateTo = (e) => {
    setDateTo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch();
  };
  return (
    <Layout>
      {user ? (
        // <div className={styles.container}>
        //   <h1>
        //     Welcome {user.first_name} {user.last_name}
        //   </h1>
        //   <h2>{user.pet}</h2>
        //   <h3>{user.quantity}</h3>
        //   <h4>{user.dateFrom}</h4>
        //   <h5>{user.dateTo}</h5>
        // </div>
        <Formik
          initialValues={{
            fname: "",
            lname: "",
            pet: "",
            quantity: "",
            dateFrom: "",
            dateTo: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.account}>
                <div className={styles.field_container}>
                  <label htmlFor="fname">First name:</label>
                  <Field
                    className={styles.field}
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder={user.first_name}
                    value={name}
                    onChange={handleFirstName}
                  />
                  <ErrorMessage name="fname" component="div" />
                </div>
                <div className={styles.field_container}>
                  <label htmlFor="lname">Last name:</label>
                  <Field
                    className={styles.field}
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Dmitriiev"
                    value={lastName}
                    onChange={handleLastName}
                  />
                  <ErrorMessage name="lname" component="div" />
                </div>
                <div className={styles.field_container}>
                  <label htmlFor="pet">Choose your pet:</label>
                  <Field
                    className={styles.field}
                    as="select"
                    name="pet"
                    value={pet}
                    onChange={handlePet}
                  >
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="fish">Fish</option>
                    <option value="monkey">Monkey</option>
                  </Field>
                </div>
                <div className={styles.field_container}>
                  <label htmlFor="quantity">Choose the quantity:</label>
                  <Field
                    className={styles.field}
                    type="number"
                    name="quantity"
                    value={quantity}
                    onChange={handleQuantity}
                  />
                  <ErrorMessage name="number" component="div" />
                </div>

                <div className={styles.field_container}>
                  <label htmlFor="datefr">Date from:</label>
                  <Field
                    className={styles.field}
                    type="date"
                    name="datefr"
                    id="datefr"
                    value={dateFrom}
                    onChange={handleDateFrom}
                  />
                  <ErrorMessage name="datefr" component="div" />
                </div>

                <div className={styles.field_container}>
                  <label htmlFor="dateto">Date to:</label>
                  <Field
                    className={styles.field}
                    type="date"
                    name="dateto"
                    id="dateto"
                    value={dateTo}
                    onChange={handleDateTo}
                  />
                  <ErrorMessage name="dateto" component="div" />
                </div>

                <button
                  className={styles.btn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <h1>Welcome</h1>
      )}
    </Layout>
  );
}

export default Users;

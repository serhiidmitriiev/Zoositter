import React, { useState } from "react";
import Layout from "../components/Layout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../styles/Form.module.css";
import store from "../app/store";
import { sitterAdded } from "../app/sitters/reducer";
import { useNavigate } from "react-router-dom";

function Account() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pet, setPet] = useState();
  const [quantity, setQuantity] = useState(1);
  const [dateFrom, setDateFrom] = useState("2023-01-01");
  const [dateTo, setDateTo] = useState("2023-02-03");

  const navigate = useNavigate();

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
    store.dispatch(
      sitterAdded({
        first_name: fname,
        last_name: lname,
        pet: pet,
        quantity: quantity,
        dateFrom: dateFrom,
        dateTo: dateTo,
      })
    );

    console.log("my store", store.getState());
    navigate(`/account/${fname}_${lname}`);
    setLname("");
    setFname("");
    setPet("");
    setQuantity(1);
    setDateFrom("2023-01-01");
    setDateTo("2023-02-03");
  };
  return (
    <Layout>
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
                  placeholder="Serhii"
                  value={fname}
                  onChange={fNameHandler}
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
                  value={lname}
                  onChange={lNameHandler}
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
                  onChange={petHandler}
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
                  onChange={quantityHandler}
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
                  onChange={dateFromHandler}
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
                  onChange={dateToHandler}
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
    </Layout>
  );
}

export default Account;

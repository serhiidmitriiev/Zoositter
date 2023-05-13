import React, { useState } from "react";
import Layout from "../components/Layout";
import { Formik, Form, Field } from "formik";
import styles from "../styles/Form.module.css";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    header: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    setUserName("");
    setPassword("");
  };
  return (
    <Layout>
      <Formik initialValues={{ userName: "", password: "" }}>
        <Form className={styles.form} onSubmit={handleSubmmit}>
          <div className={styles.account}>
            <div className={styles.field_container}>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                name="username"
                id="username"
                placeholder="serhii.dmitriiev"
                value={username}
                onChange={usernameHandler}
              />
            </div>
            <div className={styles.field_container}>
              <label htmlFor="password">Password:</label>
              <Field
                type="text"
                name="password"
                id="password"
                value={password}
                onChange={passwordHandler}
              />
            </div>
            <button type="submit" className={styles.btn}>
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </Layout>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;

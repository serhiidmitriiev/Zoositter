import React from "react";
import Layout from "../components/Layout";
import store from "../app/store";
import styles from "../styles/Users.module.css";

function Users() {
  const user = store.getState()[0] ? store.getState()[0] : null;

  console.log("store in users", store.getState()[0].first_name);
  return (
    <Layout>
      {user ? (
        <div className={styles.container}>
          <h1>
            Welcome {user.first_name} {user.last_name}
          </h1>
          <h2>{user.pet}</h2>
          <h3>{user.quantity}</h3>
          <h4>{user.dateFrom}</h4>
          <h5>{user.dateTo}</h5>
        </div>
      ) : (
        <h1>Welcome</h1>
      )}
    </Layout>
  );
}

export default Users;

import React from "react";
import logo from "./logo.svg";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.links_container}>
        <a href="/" className={styles.links}>
          Home
        </a>

        <a href="/sitters" className={styles.links}>
          Sitters
        </a>
        <a href="/owners" className={styles.links}>
          Owners
        </a>
        <a href="/news" className={styles.links}>
          News
        </a>
        <a href="/forum" className={styles.links}>
          Forum
        </a>
        <a href="/account" className={styles.links}>
          Account
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
import { useSelector } from "react-redux";
import styles from "../styles/Header.module.scss";

function Header() {
  const { user } = useSelector((state) => state.user);
  return (
    <header className={styles.navbar}>
      <ul className={styles.links}>
        <Link to="/adminpanel" style={{ textDecoration: "none" }}>
          <li>Admin</li>
        </Link>
        <Link to="/stations" style={{ textDecoration: "none" }}>
          <li>Stations</li>
        </Link>
        <Link to="/users" style={{ textDecoration: "none" }}>
          <li>Users</li>
        </Link>
        <li>{user.name}</li>
        <li style={{ cursor: "pointer" }}>
          <Logout />
        </li>
      </ul>
    </header>
  );
}

export default Header;

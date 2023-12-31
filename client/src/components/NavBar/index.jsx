import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import styles from "./index.module.css";

function NavBar({ links }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <nav className={styles.navMain}>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              className={`${styles.navLink} ${isActive(link.to)}`}
              to={link.to}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;

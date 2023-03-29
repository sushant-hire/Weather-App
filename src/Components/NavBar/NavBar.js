import React from "react";
import styles from "./NavBar.module.css";
import TornadoRoundedIcon from "@mui/icons-material/TornadoRounded";

function NavBar() {
  return (
    <nav>
      <ul className={styles.NavContainer}>
        <li className={styles.NavListContainer}>
          {" "}
          <TornadoRoundedIcon />
          WeatherChecker
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

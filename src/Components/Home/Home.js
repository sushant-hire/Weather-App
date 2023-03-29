import React from "react";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import SearchBox from "../Search Box/SearchBox";
import WeatherCard from "../Weather Card/WeatherCard";

function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.MainHomeContainer}>
        <WeatherCard />
      </div>
    </>
  );
}

export default Home;

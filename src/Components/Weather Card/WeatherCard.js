import React, { useState, useEffect } from "react";
import SearchBox from "../Search Box/SearchBox";
import styles from "./WeatherCard.module.css";

function WeatherCard() {
  const myAPIKey = "702dccc574de6b4ea7d742193662144b";
  const cities = [
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Surat",
    "Jaipur",
    "Kanpur",
    "Lucknow",
    "Nagpur",
    "Indore",
  ];
  const [weatherData, setWeatherData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = [];
      for (const city of cities) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPIKey}`
        );
        const cityData = await response.json();
        data.push(cityData);
      }
      setWeatherData(data);
    };
    fetchWeatherData();
  }, []); 

  function HandleSearch(data) {
    setSearchData(data);  
  }

  const filteredData = searchData
    ? weatherData.filter((data) => data.name.toLowerCase().includes(searchData))
    : [];

  return (
    <div className={styles.MainContainer}>
      <SearchBox HandleSearch={HandleSearch} />
      <div className={styles.MapContainer}>
        {filteredData.map((data, index) => (
          <div className={styles.WeatherCardContainer} key={index}>
            <h2>{data.name}</h2>
            <p>Weather type - {data.weather[0].description}</p>
            <p>Temperature - {data.main.temp}</p>
            <p>Humidity - {data.main.humidity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherCard;

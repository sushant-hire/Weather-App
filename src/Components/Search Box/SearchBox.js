import React from "react";
import styles from "./SearchBox.module.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox(props) {
  function HandleSearch(event) {
    props.HandleSearch(event.target.value);
  }
  return (
    <div className={styles.SearchBoxContainer}>
      <SearchIcon />
      <input
        className={styles.InputFieldContainer}
        placeholder="Search your city"
        onChange={HandleSearch}
      ></input>
    </div>
  );
}

export default SearchBox;

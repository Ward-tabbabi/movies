import React, { useState } from "react";
import AddFilm from "./AddFilm";
import films from "./Films";
import "./style.css";
const Navbar = ({ setsearsh, handleSearch }) => {
  const [films, setfilms] = useState({
    name: "",
    posterurl: "",
    description: "",
  });
  return (
    <div className="navbar">
      <nav className="list">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Anime</a>
          </li>
          <li>
            <a href="#">Drama</a>
          </li>
          <li>
            <a href="#">Comedie</a>
          </li>
        </ul>
      </nav>
      <form className="formstyle">
        <div className="recherche">
          <input
            type="text"
            placeholder="Enter Movie Name"
            className="input-text"
            onChange={(e) => {
              setsearsh(e.target.value);
              handleSearch();
            }}
          />

          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <AddFilm />
      </form>
    </div>
  );
};

export default Navbar;

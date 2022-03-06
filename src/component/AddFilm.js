import React, { useState } from "react";
import films from "./Films";

const AddFilm = ({ AddFilms }) => {
  const [show, setshow] = useState(false);
  const [films, setfilms] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: "",
  });
  return (
    <div>
      <button
        className="addmovie"
        onClick={(e) => {
          e.preventDefault();
          setshow(!show);
        }}
      >
        <i class="fa-solid fa-plus"></i>Add Movie
      </button>
      {show ? (
        <div className="addfl">
          <button className="addB" onClick={() => setshow(!show)}>
            <i class="fa-regular fa-xmark"></i>CLOSE
          </button>
          <button
            className="addM"
            onClick={(e) => {
              AddFilms(films);

              e.preventDefault();
            }}
          >
            <i class="fa-solid fa-plus"></i>add new movie
          </button>

          <div className="inputs">
            <input
              type="text"
              placeholder="movie name"
              onChange={(e) => setfilms({ ...films, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="movie image"
              onChange={(e) =>
                setfilms({ ...films, posterurl: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="movie description"
              onChange={(e) =>
                setfilms({ ...films, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="movie rating "
              onChange={(e) => setfilms({ ...films, rating: e.target.value })}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddFilm;

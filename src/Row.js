import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl ,isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {/* bunch of row posters */}
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={isLargeRow?`${base_url}${movie.poster_path}`:
                  `${base_url}${movie.backdrop_path}`}

            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
      {/* container for posters */}
    </div>
  );
}

export default Row;

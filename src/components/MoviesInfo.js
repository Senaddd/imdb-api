import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/MovieInfoPage.css";

import movies from "./movies.json";

const MoviesInfo = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getMovieById = () => {
    setMovie(movies.results.filter((m) => m.id === id)[0]);
  };
  //   const title = state.title;
  //   const description = state.description;
  //   const image = state.image;
  useEffect(() => {
    getMovieById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="movie-info-page">
      <div className="img">
        <img src={movie.image} alt="movies"></img>
      </div>
      <div className="title-description">
        {movie.title}
        <br></br> {movie.description}
      </div>
    </div>
  );
};

export default MoviesInfo;

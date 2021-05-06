import React from "react";
import ReactStars from "react-rating-stars-component";
import { isMovieNominated } from "../../../utils/utils";

export default function Movie(props) {
  const { movie, nominateMovie } = props;
  return (
    <div className="movie">
      <div className="movie__image-wrapper">
        <img
          src={movie.Poster}
          className="image"
          alt={movie.Title}
          width="300"
          height="445"
        />
        <ReactStars
          count={10}
          size={16}
          value={parseFloat(movie.imdbRating)}
          color="black"
          activeColor="yellow"
          edit={false}
          className="rating"
        />
      </div>
      <p className="movie__title">{movie.Title}</p>
      <p className="movie__release-date">{movie.Released}</p>
      <p>
        <button
          className="btn"
          style={
            isMovieNominated(movie, props.nominations) === true
              ? { cursor: "not-allowed" }
              : null
          }
          onClick={
            isMovieNominated(movie, props.nominations) === true
              ? undefined
              : () => nominateMovie(movie)
          }
        >
          Nominate
        </button>
      </p>
    </div>
  );
}

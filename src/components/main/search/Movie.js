import React from "react";
import ReactStars from "react-rating-stars-component";
import placeHolderImage from "../../../placeholder-image.jpg";
import { isMovieNominated } from "../../../utils/utils";

export default function Movie(props) {
  const { movie, nominateMovie, rateMovie } = props;
  return (
    <div className="movie">
      <div className="movie__image-wrapper">
        <img
          src={movie.Poster === "N/A" ? placeHolderImage : movie.Poster}
          className="image"
          alt={movie.Title}
          width="300"
          height="445"
        />
        <ReactStars
          count={10}
          size={16}
          value={movie.rating}
          color="yellow"
          activeColor="brown"
          edit={true}
          className="rating"
          onChange={(rating) => rateMovie(movie, rating) }
        />
      </div>
      <p className="movie__title">{movie.Title}</p>
      <p className="movie__release-date">{movie.Year}</p>
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

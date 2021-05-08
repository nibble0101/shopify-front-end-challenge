import React from "react";
import ReactStars from "react-rating-stars-component";
import placeHolderImage from "../../../placeholder-image.jpg";

export default function NominatedMovie(props) {
  const { movie, removeNomination, rateMovie } = props;
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
          value={movie.rating ? parseInt(movie.rating) : 0}
          color="yellow"
          activeColor="brown"
          edit={true}
          className="rating"
          onChange={(rating) => rateMovie(movie, rating)}
        />
      </div>
      <p className="movie__title">{movie.Title}</p>
      <p className="movie__release-date">{movie.Year}</p>
      <p>
        <button className="btn" onClick={() => removeNomination(movie)}>
          Remove
        </button>
      </p>
    </div>
  );
}

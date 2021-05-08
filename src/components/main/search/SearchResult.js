import React from "react";
import Movie from "./Movie";
import Loader from "./Loader";
import Error from "./Error";

export default function SearchResults(props) {
  if (props.isFetchingMovies) {
    return <Loader />;
  }
  if (props.error.hasError) {
    return <Error message={props.error.message} />;
  }
  return (
    <div className="search-result">
      <div className="warning-wrapper">
        {props.nominations.length === 5 ? (
          <p className="warning">
            You have reached nominations limit of 5 movies
          </p>
        ) : null}
      </div>
      <h2 className="search-result__title">Movie search result</h2>
      <div className="search-result__list">
        {props.movies.map((movie, index) => (
          <Movie
            movie={movie}
            nominateMovie={props.nominateMovie}
            rateMovie={props.rateMovie}
            key={`${movie.imdbID}_${index}`}
            nominations={props.nominations}
          />
        ))}
      </div>
    </div>
  );
}

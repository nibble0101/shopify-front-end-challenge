import React from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";

export default function Search(props) {
  return (
    <>
      <SearchBar
        value={props.value}
        submitHandle={props.submitHandle}
        changeHandle={props.changeHandle}
      />
      <SearchResult
        nominateMovie={props.nominateMovie}
        rateMovie={props.rateMovie}
        isFetchingMovies={props.isFetchingMovies}
        movies={props.movies}
        error={props.error}
        nominations={props.nominations}
      />
    </>
  );
}

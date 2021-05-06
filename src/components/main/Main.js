import React, { useState, useEffect } from "react";
import Nominations from "./nominations/Nominations";
import Search from "./search/Search";

const baseUrl = "https://www.omdbapi.com";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [isFetchingMovies, setIsFetchingMovies] = useState(false);
  const [error, setError] = useState({ hasError: false, message: "" });
  function submitHandle(event) {
    event.preventDefault();
    if (!value) {
      alert("Please enter valid movie title before searching");
      return;
    }
    setQuery(value);
  }
  function changeHandle(event) {
    setValue(event.target.value);
    if (error.hasError) {
      setError({ hasError: false, message: "" });
    }
  }

  function nominateMovie(movieObject) {
    if (nominations.length === 5) {
      alert("You have reached your nominations limit");
      return;
    }
    const nominatedMovieIndex = nominations.findIndex(
      (movieObj) => movieObj.imdbID === movieObject.imdbID
    );
    if (nominatedMovieIndex > -1) {
      alert("You can't nominate the same movie more than once");
      return;
    }
    setNominations([...nominations, movieObject]);
  }
  function removeNomination(index) {
    const nominationsClone = [...nominations];
    nominationsClone.splice(index, 1);
    setNominations(nominationsClone);
  }
  useEffect(() => {
    if (!query) {
      return;
    }
    const url = `${baseUrl}/?apikey=${process.env.REACT_APP_API_KEY}&type=movie&t=${query}`;
    async function fetchMovies() {
      try {
        setIsFetchingMovies(true);
        const searchedMovie = await fetch(url).then((response) =>
          response.json()
        );
        if (searchedMovie.Error) {
          setError({ hasError: true, message: searchedMovie.Error });
          return;
        }
        setMovies([searchedMovie]);
      } catch (error) {
        setError({ hasError: true, message: "Unknown error has occurred" });
      } finally {
        setIsFetchingMovies(false);
      }
    }
    fetchMovies();
  }, [query]);

  return (
    <main className="main">
      <Search
        movies={movies}
        submitHandle={submitHandle}
        changeHandle={changeHandle}
        nominateMovie={nominateMovie}
        nominations={nominations}
        value={value}
        isFetchingMovies={isFetchingMovies}
        error={error}
      />
      <Nominations
        nominations={nominations}
        removeNomination={removeNomination}
      />
    </main>
  );
}

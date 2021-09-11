import React, { useEffect, useReducer } from "react";
import Nominations from "./nominations/Nominations";
import Search from "./search/Search";
import { Route, Switch } from "react-router";
import {
  setItemToLocalStorage,
  getItemFromLocalStorage,
  addRatingToMovies,
} from "../../utils/utils";
import {
  SET_MOVIES,
  SET_NOMINATED_MOVIES,
  REMOVE_NOMINATED_MOVIE,
  SET_VALUE,
  SET_QUERY,
  SET_FETCHING_INDICATOR,
  SET_ERROR_INDICATOR,
  SET_MOVIE_RATING,
  initialState,
  reducer,
  initializeState,
} from "../../reducer/reducer";

const baseUrl = "https://www.omdbapi.com";

export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialState, initializeState);
  console.log(process.env.REACT_APP_API_KEY);
  function submitHandle(event) {
    event.preventDefault();
    if (state.value.trim().length < 3) {
      alert("Please enter valid movie title before searching");
      return;
    }
    dispatch({ type: SET_QUERY, query: state.value });
  }

  function changeHandle(event) {
    dispatch({ type: SET_VALUE, value: event.target.value });
    if (state.error.hasError) {
      dispatch({
        type: SET_ERROR_INDICATOR,
        error: { hasError: false, message: "" },
      });
    }
  }

  function nominateMovie(movieObject) {
    if (state.nominations.length === 5) {
      alert("You have reached your nominations limit");
      return;
    }
    const nominatedMovieIndex = state.nominations.findIndex(
      (movieObj) => movieObj.imdbID === movieObject.imdbID
    );
    if (nominatedMovieIndex > -1) {
      alert("You can't nominate the same movie more than once");
      return;
    }
    dispatch({ type: SET_NOMINATED_MOVIES, nomination: movieObject });
  }

  function removeNomination(movieObject) {
    dispatch({ type: REMOVE_NOMINATED_MOVIE, movieObject });
  }

  function rateMovie(movieObject, rating) {
    dispatch({ type: SET_MOVIE_RATING, movieObject, rating });
  }

  useEffect(() => {
    if (!state.query.trim()) {
      return;
    }
    const url = `${baseUrl}/?apikey=${process.env.REACT_APP_API_KEY}&type=movie&s=${state.query}&page=1`;
    async function fetchMovies() {
      try {
        dispatch({ type: SET_FETCHING_INDICATOR, isFetchingMovies: true });
        const searchedMovie = await fetch(url).then((response) =>
          response.json()
        );

        if (searchedMovie.Error) {
          dispatch({
            type: SET_ERROR_INDICATOR,
            error: { hasError: true, message: searchedMovie.Error },
          });
          return;
        }
        const starredMovies = getItemFromLocalStorage("starred-movies");
        const moviesWithRating = addRatingToMovies(
          searchedMovie.Search,
          starredMovies
        );
        dispatch({ type: SET_MOVIES, movies: moviesWithRating });
      } catch (error) {
        dispatch({
          type: SET_ERROR_INDICATOR,
          error: { hasError: true, message: "Unknown error has occurred" },
        });
      } finally {
        dispatch({ type: SET_FETCHING_INDICATOR, isFetchingMovies: false });
      }
    }
    fetchMovies();
  }, [state.query]);

  useEffect(() => {
    setItemToLocalStorage("nominations", state.nominations);
  }, [state.nominations]);

  useEffect(() => {
    setItemToLocalStorage("starred-movies", state.starredMovies);
  }, [state.starredMovies]);

  return (
    <main className="main">
      <Switch>
        <Route exact path="/nominations">
          <Nominations
            nominations={state.nominations}
            removeNomination={removeNomination}
            rateMovie={rateMovie}
          />
        </Route>
        <Route exact path="/">
          <Search
            movies={state.movies}
            submitHandle={submitHandle}
            changeHandle={changeHandle}
            nominateMovie={nominateMovie}
            rateMovie={rateMovie}
            nominations={state.nominations}
            value={state.value}
            isFetchingMovies={state.isFetchingMovies}
            error={state.error}
          />
        </Route>
      </Switch>
    </main>
  );
}

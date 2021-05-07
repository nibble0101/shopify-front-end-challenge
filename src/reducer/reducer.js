import { removeNomination } from "../utils/utils";

export const SET_MOVIES = "SET_MOVIES";
export const SET_NOMINATED_MOVIES = "SET_NOMINATED_MOVIES";
export const REMOVE_NOMINATED_MOVIE = "REMOVE_NOMINATED_MOVIE";
export const SET_VALUE = "SET_VALUE";
export const SET_QUERY = "SET_QUERY";
export const SET_FETCHING_INDICATOR = "SET_FETCHING_INDICATOR";
export const SET_ERROR_INDICATOR = "SET_ERROR_INDICATOR";

export const initialState = {
  movies: [],
  nominations: [],
  starredMovies: [],
  value: "",
  query: "",
  isFetchingMovies: false,
  error: { hasError: false, message: "" },
};

export function initializeState(initialState) {
  const nominatedMovies = JSON.parse(localStorage.getItem("nominations"));
  if (nominatedMovies) {
    initialState.nominations = nominatedMovies;
  }
  const starredMovies = JSON.parse(localStorage.getItem("starred"));
  if (starredMovies) {
    initialState.starredMovies = starredMovies;
  }
  return initialState;
}

export function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case SET_MOVIES:
      return { ...state, movies: action.movies };
    case SET_NOMINATED_MOVIES:
      return {
        ...state,
        nominations: [...state.nominations, action.nomination],
      };
    case REMOVE_NOMINATED_MOVIE:
      return {
        ...state,
        nominations: removeNomination(state, action.movieObject),
      };
    case SET_VALUE:
      return { ...state, value: action.value };
    case SET_QUERY:
      return { ...state, query: action.query };
    case SET_FETCHING_INDICATOR:
      return { ...state, isFetchingMovies: action.isFetchingMovies };
    case SET_ERROR_INDICATOR:
      return { ...state, error: { ...action.error } };
    default:
      return state;
  }
}

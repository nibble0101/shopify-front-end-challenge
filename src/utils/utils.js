/**
 * Sets item to local storage
 * @param {string} key
 * @param {any[]} value
 * @returns {undefined}
 */

export function setNominationsToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Gets the value of a string from local storage
 * @param {string} key
 * @returns { any[] | string }
 */
export function getNominationsFromLocalStorage(key) {
  const item = JSON.parse(localStorage.getItem(key));
  return item ? item : "";
}

export function isMovieNominated(movieObject, nominatedMovies) {
  const movieIndex = nominatedMovies.findIndex(
    (movieObj) => movieObj.imdbID === movieObject.imdbID
  );
  return movieIndex < 0 ? false : true;
}

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
  const nominations = JSON.parse(localStorage.getItem(key));
  return nominations ? nominations : "";
}

/**
 * Checks if a movie has been nominated
 * @param {object} movieObject 
 * @param {object[]} nominatedMovies 
 * @returns {boolean}
 */

export function isMovieNominated(movieObject, nominatedMovies) {
  const movieIndex = nominatedMovies.findIndex(
    (movieObj) => movieObj.imdbID === movieObject.imdbID
  );
  return movieIndex < 0 ? false : true;
}

/**
 * Removes nominated movie from list of nominated movies
 * @param {object} state 
 * @param {object} movieObject 
 * @returns {object[]}
 */

export function removeNomination(state, movieObject) {
  const { nominations } = state;
  const nominationsClone = [...nominations];
  const nominatedMovieIndex = nominationsClone.findIndex(
    (movieObj) => movieObj.imdbID === movieObject.imdbID
  );
  nominationsClone.splice(nominatedMovieIndex, 1);
  return nominationsClone;
}
/**
 * Sets item to local storage
 * @param {string} key
 * @param {any[]} value
 * @returns {undefined}
 */

export function setItemToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Gets the value of a string from local storage
 * @param {string} key
 * @returns {any[]}
 */
export function getItemFromLocalStorage(key) {
  const objectsArray = JSON.parse(localStorage.getItem(key));
  return objectsArray && objectsArray.constructor === Array ? objectsArray : [];
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
/**
 * Add rated movie or update rating list
 * @param {object[]} movieList
 * @param {object} movieObject
 * @param {integer} rating
 * @returns {object[]}
 */

export function updateRatingList(ratingList, movieObject, rating) {
  const ratingListClone = [...ratingList];
  const movieIndex = ratingListClone.findIndex(
    (movieObj) => movieObj.imdbID === movieObject.imdbID
  );
  if (movieIndex < 0) {
    ratingListClone.push({ ...movieObject, rating });
    return ratingListClone;
  }
  ratingListClone[movieIndex] = { ...ratingListClone[movieIndex], rating };
  return ratingListClone;
}

/**
 * Adds user rating to searched movies
 * @param {object[]} fetchedMovieList
 * @param {object[]} ratedMovieList
 * @returns {object[]}
 */

export function addRatingToMovies(fetchedMovieList, ratedMovieList) {
  return fetchedMovieList.map((movieObject) => {
    const movieIndex = ratedMovieList.findIndex(
      (movieObj) => movieObj.imdbID === movieObject.imdbID
    );
    if (movieIndex < 0) {
      movieObject.rating = 0;
      return movieObject;
    }
    movieObject.rating = ratedMovieList[movieIndex].rating;
    return movieObject;
  });
}

/**
 * Add new or update movie rating 
 * @param {object[]} movieList
 * @param {object} movieObject
 * @param {integer} rating
 * @returns {object[]}
 */

export function rateMovie(movieList, movieObject, rating) {
  const movieIndex = movieList.findIndex(
    (movieObj) => movieObj.imdbID === movieObject.imdbID
  );
  if (movieIndex < 0) {
    return movieList;
  }
  const movieListClone = [...movieList];
  movieListClone[movieIndex].rating = rating;
  return movieListClone;
}

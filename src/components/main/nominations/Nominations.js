import React from "react";

export default function Nominations(props) {
  const { nominations, removeNomination } = props;
  return (
    <div>
      <p> Your Nominations </p>
      {nominations.length === 5 ? (
        <p className="warning">You have reached nominations limit of 5 movies</p>
      ) : null}
      <ul className="nominations">
        {nominations.map((movie, index) => {
          return (
            <li key={movie.imdbID} className="nominations__nominated-movie">
              {movie.Title}
              <button
                className="btn btn--margin-left"
                onClick={() => removeNomination(index)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

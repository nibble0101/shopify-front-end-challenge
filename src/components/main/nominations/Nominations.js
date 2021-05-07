import React from "react";
import NominatedMovie from "./NominatedMovie";

export default function Nominations(props) {
  const { nominations, removeNomination } = props;
  return (
    <div>
      <h2 className="nominations-header"> Your Nominations </h2>
      <div className="warning-wrapper">
        {nominations.length === 5 ? (
          <p className="warning">
            You have reached nominations limit of 5 movies
          </p>
        ) : null}
      </div>
      <div className="nominations">
        {nominations.map((movie, index) => {
          return (
            <NominatedMovie
              key={`${movie.imdbID}_${index}`}
              removeNomination={removeNomination}
              movie={movie}
            />
          );
        })}
      </div>
    </div>
  );
}

import React from "react";

export default function SearchBar(props) {
  const { value, submitHandle, changeHandle } = props;
  return (
    <form onSubmit={submitHandle} className="form">
      <label htmlFor="search-movie">Search</label>
      <input
        type="text"
        className="form__text-input"
        id="search-movie"
        onChange={changeHandle}
        value={value}
      />
      <input type="submit" className="btn" value="Search" />
    </form>
  );
}

import React, { useState, useEffect } from "react";

const Fcc = () => {
  const movies = [
    { title: "titanic1", year: 2001 },
    { title: "titanic2", year: 2002 },
    { title: "titanic3", year: 2003 },
  ];

  const renderMovies = movies.map((movie) => {
    return (
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </div>
    );
  });

  return (
    <div>
      <h1>Movie List</h1>
      {renderMovies}
      {/* <div className="movie">
        <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div>
      </div> */}
    </div>
  );
};
export default Fcc;

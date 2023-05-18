import React from "react";
import Movie from '../components/Movie'
const Fcc = () => {
  const movies = [
    { title: "titanic1", year: 2001 },
    { title: "titanic2", year: 2002 },
    { title: "titanic3", year: 2003 },
  ];

  const renderMovies = movies.map((movie) => {
    return (
     <Movie movie={movie} key={movie.title}></Movie>
    );
  });

  return (
    <div>
      <h1>Movie List2</h1>
      {renderMovies}
      {/* <div className="movie">
        <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div>
      </div> */}
    </div>
  );
};
export default Fcc;

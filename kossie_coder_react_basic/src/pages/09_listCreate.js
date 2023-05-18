import React, { useState } from "react";
import Movie from "../components/Movie";
const Fcc = () => {
  const [title, setMovieTitle] = useState("");
  const [year, setMovieYear] = useState("");

  const [movies, setMovies] = useState([
    { title: "titanic1", year: 2001 },
    { title: "titanic2", year: 2002 },
    { title: "titanic3", year: 2003 },
  ]);

  // const movies = [
  //   { title: "titanic1", year: 2001 },
  //   { title: "titanic2", year: 2002 },
  //   { title: "titanic3", year: 2003 },
  // ];

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title}></Movie>;
  });
  const addMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, { title: title, year: year }]);
    setMovieTitle("");
    setMovieYear("");
  };

  return (
    <div>
      <form onSubmit={addMovie}>
        <h1>Movie List3</h1>
        <input
          type="text"
          placeholder="영화제목"
          value={title}
          onChange={(e) => setMovieTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="개봉년도"
          value={year}
          onChange={(e) => setMovieYear(e.target.value)}
        ></input>

        {/* <div className="movie">
        <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div>
      </div> */}
        <button type="submit">등록</button>
      </form>
      {renderMovies}
    </div>
  );
};
export default Fcc;

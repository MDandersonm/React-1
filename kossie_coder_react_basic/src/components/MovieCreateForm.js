import React, { useState } from "react";

const MovieForm = ({ addMovieProps }) => {
  const [title, setMovieTitle] = useState("");
  const [year, setMovieYear] = useState("");

  const resetForm = () => {
    setMovieTitle("");
    setMovieYear("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // setMovies([...movies, { title: title, year: year }]);
    addMovieProps({
      id: Date.now(),
      title: title,
      year: year,
    });
    resetForm();
  };

  return (
    <form onSubmit={onSubmit}>
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
  );
};
export default MovieForm;

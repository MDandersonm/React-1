import React, { useState } from "react";
import InputField from "./InputField";

const MovieForm = ({ addMovieProps }) => {
  const [title, setMovieTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [year, setMovieYear] = useState("");
  const [yearError, setYearError] = useState("");

  const resetForm = () => {
    setMovieTitle("");
    setMovieYear("");
  };
  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!title) {
      setTitleError("영화제목을 넣어주세요");
      validated = false;
    }
    if (!year) {
      setYearError("개봉년도를 넣어주세요");
      validated = false;
    }
    return validated;
  };
  const resetErrors = () => {
    setTitleError("");
    setYearError("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // setMovies([...movies, { title: title, year: year }]);
    if (validateForm()) {
      addMovieProps({
        id: Date.now(),
        title: title,
        year: year,
      });
      resetErrors();
      resetForm();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Movie List3</h1>
      <InputField
        type="text"
        placeholder="영화제목"
        value={title}
        onChange={(e) => setMovieTitle(e.target.value)}
        ErrorMessage={titleError}
      ></InputField>
      <InputField
        type="number"
        placeholder="개봉년도"
        value={year}
        onChange={(e) => setMovieYear(e.target.value)}
        ErrorMessage={yearError}
      ></InputField>

      {/* <input
        type="text"
        placeholder="영화제목"
        value={title}
        onChange={(e) => setMovieTitle(e.target.value)}
      ></input>
      <div style={{ color: "red" }}>{titleError}</div>
    
      <input
        type="number"
        placeholder="개봉년도"
        value={year}
        onChange={(e) => setMovieYear(e.target.value)}
      ></input>
      <div style={{ color: "red" }}>{yearError}</div> */}

      {/* <div className="movie">
        <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div>
      </div> */}
      <button type="submit">등록</button>
    </form>
  );
};
export default MovieForm;

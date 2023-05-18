import React, { useState } from "react";
import Movie from "../components/Movie";
import MovieForm from "../components/MovieForm";
const Fcc = () => {

  const [movies, setMovies] = useState([
    { title: "titanic1", year: 2001 },
    { title: "titanic2", year: 2002 },
    { title: "titanic3", year: 2003 },
  ]);


  const addMovie = (movie) => {//무비객체를 받아옴
    setMovies([...movies, movie]);
  };

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title}></Movie>;
  });

  return (
    <div>
      {/* 함수를 자식컴퍼넌트에 props로 보냄 */}
      <MovieForm addMovieProps={addMovie}/>
      
      {renderMovies}
    </div>
  );
};
export default Fcc;

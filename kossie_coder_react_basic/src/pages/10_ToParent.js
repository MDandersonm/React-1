import React, { useState } from "react";
import Movie from "../components/Movie";
import MovieCreateForm from "../components/MovieCreateForm";
const Fcc = () => {

  const [movies, setMovies] = useState([
    {id:1, title: "titanic1", year: 2001 },
    {id:2, title: "titanic2", year: 2002 },
    {id:3, title: "titanic3", year: 2003 },
  ]);


  const addMovie = (movie) => {//무비객체를 받아옴
    setMovies([...movies, movie]);
  };
  const removeMovie = (id) =>{
    console.log()
    setMovies(movies.filter( movie =>{
      return movie.id !== id
    }));
  }

  const renderMovies = movies.length ? movies.map((movie) => {
    return <Movie movie={movie} removeMovieProps={removeMovie} key={movie.id}></Movie>;
  }) : '추가된영화가없습니다';

  return (
    <div>
      {/* 함수를 자식컴퍼넌트에 props로 보냄 */}
      <MovieCreateForm addMovieProps={addMovie}/>
      
      {renderMovies}
    </div>
  );
};
export default Fcc;

import React, { useState } from "react";

// const Movie = (props) => {
//   return (
//     <div className="movie">
//       <div className="movie-title">{props.movie.title}</div>
//       <div className="movie-year">{props.movie.year}</div>
//     </div>
//   );
// };
const Movie = ({ movie,removeMovieProps }) => {
  return (
    <div className="movie">
      <div className="movie-title">
        {movie.title}

        <span className="movie-year">{movie.year}</span>
      </div>
      <div>
        <button onClick={()=>removeMovieProps(movie.id)}>삭제</button>
      </div>
    </div>
  );
};
export default Movie;

// src/components/MovieList.js
import React from 'react';
import MovieCard from './moviecard';

function MovieList({ movies }) {
    return (
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }

export default MovieList;

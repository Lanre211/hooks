import { Link } from 'react-router-dom';
import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, posterURL, rating,} = movie;

  return (
    <div className="movie-card">
      <Link to={`/movies/${title}`} style={{ textDecoration: 'none' }}>
        <img src={posterURL} alt={`${title} Poster`} />
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
      </Link>
    </div>
  );
};


export default MovieCard;

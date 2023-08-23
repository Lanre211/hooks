// src/components/MovieDetails.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  const { title, description, trailerLink } = movie;

  return (
    <div className="movie-details">
      <h2>{title}</h2>
      <p>{description}</p>
      <iframe
        title={`${title} Trailer`}
        width="560"
        height="315"
        src={trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/" style={{ textDecoration: 'none' }}>
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDetails;

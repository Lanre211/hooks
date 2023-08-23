import './App.css';
import React, { useState } from 'react';
import MovieList from './movielist';
import MovieCard from './moviecard';
import MovieDetails from './moviedetails';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


    const initialMovies = [
      {
        title: 'Inception',
        description: 'A thief who enters the dreams of others to steal their secrets.',
        posterURL: 'https://th.bing.com/th/id/OIP.jjR2uVksE_4A0EE1iU9sUwHaGE?w=194&h=159&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        rating: 8.8,
        trailerLink: 'https://www.youtube.com/embed/8hP9D6kZseM',
      },
      {
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterURL: 'https://th.bing.com/th/id/OIP.yobjBRMMdekQvZwGHeebKgAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        rating: 9.3,
        trailerLink: 'https://www.youtube.com/embed/NmzuHjWmXOc',
      },
      {
        title: 'Fast and Furious X',
        description: 'The Fast and Furious X is a 2023 action film that follows Dominic Toretto and his crew as they face Dante Reyes, the son of a drug lord they killed in Fast Five12.',
        posterURL: 'https://th.bing.com/th/id/OIP.HemiVTM4bZ0AKZGmraWZogAAAA?w=318&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        rating: 8.9,
        trailerLink:'https://www.youtube.com/embed/32RAq6JzY-w'
        
      },
   
    ];
    const App = () => {
    const [movies] = useState(initialMovies);

    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<MovieList movies={movies} />} />
            <Route
              path="/movies/:title"
              element={({ params }) => {
                const movie = movies.find(movie => movie.title === params.title);
                return <MovieDetails movie={movie} />; 
              }}
            />
          </Routes>
        </Router>
      </div>
    );
  };


export default App;



import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay.jsx";
import Form from "./components/Form.jsx";
// import axios from 'axios';

function App() {
  const apiKey = "98e3fb1f";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    getMovie(randomLetter);
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;

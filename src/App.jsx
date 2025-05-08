import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay.jsx";
import Form from "./components/Form.jsx";

function App() {
  // Constant with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
       <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
//import CSS
import "./App.css";
import Movie from "./Movie";

function MoviesList() {
  const [movies, setMovies] = useState([
    {
      title: "Fighter",
      genre: "Action",
      description: "An action-packed movie about a determined fighter.",
    },
    {
      title: "House of Dragons",
      genre: "Fantasy",
      description:
        "A thrilling series about the power struggles in a dragon-filled kingdom.",
    },
    {
      title: "Titanic",
      genre: "Romance",
      description: "A love story set on the ill-fated Titanic.",
    },
    {
      title: "Inception",
      genre: "Sci-Fi",
      description: "A mind-bending thriller about dream invasion.",
    },
  ]);

  const [movieCategory, setCategory] = useState([
    { type: "Horror", name: "one", genre: "Genre1" },
    { type: "Adventure", name: "two", genre: "Genre2" },
    { type: "Fiction", name: "three", genre: "Genre3" },
  ]);

  const [showDetails, setshowDetails] = useState(false);
  const [filterType, setFilterType] = useState("Titanic");
  const [filterTypeCateg, setFilterTypeCateg] = useState("All Movie Category");

  const removeMovie = (title) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.title !== title)
    );
  };

  const filteredMovies = filterType
    ? movies.filter(
        (movie) => movie.title.toLowerCase() === filterType.toLowerCase()
      )
    : movies;

    const filteredCateg = filterTypeCateg
    ? movieCategory.filter(
        (moviecateg) => moviecateg.type.toLowerCase() === filterTypeCateg.toLowerCase()
      )
    : movieCategory;

  //shodetails true or false
  const toggleDisplay = () => {
    setshowDetails(!showDetails);
  };

  return (
    <div className="movie-select">
      <h2> Select your favourite movie category:</h2>
      <select
        id="filterType"
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="All Movie Category">All Movie Category</option>
        <option value="Horror">Horror</option>
        <option value="Adventure">Adventure</option>
        <option value="Fiction">Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Comedy">Comedy</option>
        {/* Add more options as needed */}
      </select>

      <button onClick={toggleDisplay}>
        {showDetails ? "Hide Details" : "Display Details"}
      </button>

      <h2>Movie Category Details</h2>
      {showDetails && (
        <ul>
          {filteredCateg.map((movieCateg) => (
            <li key={movieCateg.type}>
              <strong> "Type" </strong> : {movieCateg.type}
              <br></br>
              <strong> "Name" : </strong>
              {movieCateg.name}
              <br></br>
              <strong> "Genre" : </strong>
              {movieCateg.genre}
              <br></br>
              <br></br>
              <button
                className="remove-button"
                onClick={() => removeMovie(movieCateg.type)}
              >
                Remove MovieCateg from List
                <br></br>
              </button>
            </li>
          ))}
        </ul>
      )}


      <h2>Select your favourite movie:</h2>
      <select onChange={(e) => setFilterType(e.target.value)}>
        <option value="">All Movies</option>
        {movies.map((movie, index) => (
          <option key={index} value={movie.title}>
            {movie.title}
          </option>
        ))}
      </select>

      <button onClick={toggleDisplay}>
        {showDetails ? "Hide Details" : "Display Details"}
      </button>

      <h2>Movie Details</h2>
      {showDetails && (
        <ul>
          {filteredMovies.map((movie) => (
            <li key={movie.title}>
              <strong> "Title" </strong> : {movie.title}
              <br></br>
              <strong> "Genre" : </strong>
              {movie.genre}
              <br></br>
              <strong> "Description" : </strong>
              {movie.description}
              <br></br>
              <br></br>
              <button
                className="remove-button"
                onClick={() => removeMovie(movie.title)}
              >
                Remove Movie from List
                <br></br>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesList;

// return (
//     <div className="movie-list">
//     <h2> Favourite Movies :</h2>
//        <ul>
//          {/* or filtering logic */}
//             {/*  moivies.map((movies,index) => (<li key = {index}> {movie.title}</li>)*/}
//             {
//               movies.map((movie, index) =>
//               (
//                  <li key={index}>{movie.title}</li>
//               )
//             )
//             }
//        </ul>

//         {/* toggling movies between showing all movies and a specific genre */}
//         {/*may be filter to display specific*/}

//        { /* section for selected movie card - where you give extra details about movie}*/}
//        <div className = "card">
//           {/* title - if you clikc on button it toggles the details */}
//           {/* button to remove movie from the list   ==> technically goes into list item
//           (figure out how to remove it and incorporate this)*/}
//           {/*genre */}
//           {/* conditionally display more details if showdetails = true  -- ternary operator */}
//           {/* button to togglw shodetails or a function to toggle details */}
//           {/*or you can have a show detail butto nto toggle showetails */}
//        </div>
//     </div>
// );

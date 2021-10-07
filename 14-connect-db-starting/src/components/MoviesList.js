import React, { Component } from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

class MovieList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <ul className={classes["movies-list"]}>
        {this.props.movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        ))}
      </ul>
    );
  }
}

// const MovieList = (props) => {
//   return (
//     <ul className={classes["movies-list"]}>
//       {props.movies.map((movie) => (
//         <Movie
//           key={movie.id}
//           title={movie.title}
//           releaseDate={movie.releaseDate}
//           openingText={movie.openingText}
//         />
//       ))}
//     </ul>
//   );
// };

export default MovieList;

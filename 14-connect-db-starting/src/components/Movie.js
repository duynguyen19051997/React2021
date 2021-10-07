import React, { Component } from "react";

import classes from "./Movie.module.css";

class Movie extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <li className={classes.movie}>
        <h2>{this.props.title}</h2>
        <h3>{this.props.releaseDate}</h3>
        <p>{this.props.openingText}</p>
      </li>
    );
  }
}

// const Movie = (props) => {
//   return (
//     <li className={classes.movie}>
//       <h2>{props.title}</h2>
//       <h3>{props.releaseDate}</h3>
//       <p>{props.openingText}</p>
//     </li>
//   );
// };

export default Movie;

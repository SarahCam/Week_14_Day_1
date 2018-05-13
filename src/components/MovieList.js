import React from "react";
import Movie from "./Movie"

class MovieList extends React.Component {
  render(){
    const movieRows = this.props.data.map((movie, index) => {
      return (
        <ul>
          <Movie name={movie.name} showTimes={movie.showTimes} url={movie.url} showTimesUrl={movie.showTimesUrl} key={index}></Movie>
        </ul>
      );
    });
    return (
      <React.Fragment>
        <li>{movieRows}</li>
      </React.Fragment>
    )
  }
}

export default MovieList;

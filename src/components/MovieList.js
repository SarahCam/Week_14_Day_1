import React, { Component } from "react";
import Movie from "./Movie"

class MovieList extends Component {
  render(){
    const movieNodes = this.props.data.map(movie => {
      return (
        <Movie name={movie.name} showTimes={movie.showTimes} url={movie.url} key={movie.id}></Movie>
      );
    });
    return (
      <table><tbody className="movieList">{movieNodes}</tbody></table>
    )
  }
}

export default MovieList;

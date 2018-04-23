import React, { Component } from "react";
import MovieList from "../components/MovieList"

class MovieBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [ { id: 1, name: "Film A", showTimes: "showtimes linkA"},
              { id: 2, name: "Film B", showTimes: "showtimes linkB"}]
    }
  }

  render(){
    return (
      <div className="movie-box">
        <h2>UK Opening This Week</h2>
        <MovieList data={this.state.data} />
      </div>
  );
  }
}

export default MovieBox;

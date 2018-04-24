import React, { Component } from "react";
import MovieList from "../components/MovieList"

class MovieBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [ { id: 1, name: "Rampage", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { id: 2, name: "Peter Rabbit", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { id: 3, name: "A Quiet Place", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { id: 4, name: "Ready Player One", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { id: 5, name: "Truth or Dare", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { id: 6, name: "Avengers: Infinity War", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { id: 7, name: "Beast", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
            ]
    }
  }

  getShowTimes(){
    console.log("User has clicked on Get Show Times button...");
  }

  render(){
    return (
      <div className="movie-box">
        <h2>UK Opening This Week</h2>
        <MovieList data={this.state.data} />
        <a href="https://www.imdb.com">See more opening this week >></a><br/>
        <button onClick={this.getShowTimes}>Get Show Times >></button>
      </div>
  );
  }
}

export default MovieBox;

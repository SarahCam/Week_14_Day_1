import React from "react";
import Heading from "../components/Heading";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";


class MovieBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [ { name: "Rampage", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { name: "Peter Rabbit", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { name: "A Quiet Place", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { name: "Ready Player One", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { name: "Truth or Dare", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { name: "Avengers: Infinity War", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
              { name: "Beast", url:"https://www.imdb.com", showTimes: "Showtimes", showTimesUrl: "https://www.imdb.com"},
            ]
    }
  }

  getShowTimes(){
    console.log("User has clicked on Get Show Times button...");
  }

  render(){
    return (
      <React.Fragment>
        <Heading />
        <MovieList data={this.state.data} />
        <Footer />
      </React.Fragment>
  );
  }
}

export default MovieBox;

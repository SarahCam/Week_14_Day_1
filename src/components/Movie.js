import React from "react";

const Movie = (props) =>
        <React.Fragment>
          <a href={props.url}>{props.name}</a>
          <a href={props.showTimesUrl}>{props.showTimes}</a>
        </React.Fragment>

export default Movie;

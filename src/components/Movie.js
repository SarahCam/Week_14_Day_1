import React from "react";

const Movie = (props) =>
        <tr className="Movie">
          <td className="movieURL"><a href={props.url}>{props.name}</a></td>
          <td className="movieShowTimes">{props.showTimes}</td>
        </tr>

export default Movie;

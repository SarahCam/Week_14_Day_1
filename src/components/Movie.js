import React from "react";

const Movie = (props) =>
      <div className="Movie">
        <tr>
          <td className="movieName">{props.name}</td>
          <td className="movieShowTimes">{props.showTimes}</td>
        </tr>
      </div>

export default Movie;

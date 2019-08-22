import React from "react";
//import "./index.css";

export const Starships = ({ movieDetails, getMovieDetails }) => {
  return (
    <div>
      <div className="button" onClick={() => getMovieDetails(episode_id)}>
        {movieDetails.starships}
      </div>
    </div>
  );
};

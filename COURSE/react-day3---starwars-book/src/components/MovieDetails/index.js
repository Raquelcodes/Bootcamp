import React from "react";
import "./index.css";

export const MovieDetails = ({ films, getMovieDetails }) => {
  return (
    <div>
      <button
        className="button"
        onClick={() => getMovieDetails(films.episode_id)}
      >
        {films.title}
      </button>
    </div>
  );
};

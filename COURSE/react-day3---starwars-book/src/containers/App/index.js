import React, { Component } from "react";
//import axios from "axios";
import uuid from "uuid";
import { MovieDetails } from "../../components/MovieDetails";
import "./index.css";
import { Starships } from "../../components/Starships";

class App extends Component {
  state = {
    films: [],
    movieDetails: [],
    starships: []
  };

  getMovieDetails = episode_id => {
    console.log(episode_id);
    fetch(`https://swapi.co/api/films/${episode_id}/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ movieDetails: data });
      });
  };

  getStarships = episode_id => {
    console.log(episode_id);
    fetch(`https://swapi.co/api/starships/${episode_id}/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ starships: data });
      });
  };

  componentDidMount() {
    console.log("componenet did mount");
    // axios
    //   .get("films")
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ films: data });
    //   })
    //   .catch(error => console.log(error));

    // axios
    //   .get("films")
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));

    fetch("https://swapi.co/api/films")
      .then(res => res.json())
      .then(data => {
        this.setState({ films: data });
      });
  }

  render() {
    console.log("render App");
    console.log(this.state.movieDetails);

    return (
      <>
        <h1 className="title">Starwars Book</h1>

        <br />
        {this.state.films.results
          ? this.state.films.results.map((films, id = uuid()) => {
              return (
                <MovieDetails
                  key={id}
                  films={films}
                  getMovieDetails={this.getMovieDetails}
                />
              );
            })
          : "no films to show"}
        <br />
        <div className="background">
          {this.state.movieDetails.opening_crawl} <br />
          {this.state.movieDetails.starships
            ? this.state.starships.map((movieDetails, id = uuid()) => {
                return ({films.starships}
          
          {/* <li>{this.state.movieDetails.starships}</li> */}
          {/* {this.state.movieDetails.starships
            ? this.state.starships.map((movieDetails, id = uuid()) => {
                return (
                 
                    <Starships
                    key={id}
                    movieDetails={movieDetails}
                    //   getStarships={this.getStarships}
                    getMovieDetails={this.getMovieDetails}
                  />
                );
              })
            : "no starships to show"} */}
        </div>

        {/* <br /> {this.state.movieDetails.starships} */}
      </>
    );
  }
}

export default App;

import React from 'react';
import Header from './components/Header/index.js';
import Restaurant from './components/Restaurant/index';
import './App.css';

function Home() {


  return (
    <div>
      <Header/>
      <div className="SearchSection">
        <input type="text" className="searchInput" placeholder="Search..."/>
        <button className="searchButton">
            Search
        </button>
      </div>
      <div className="Title">
        <h2>BEST RATED RESTAURANTS</h2>
      </div>
        <div className="RestaurantSection">
        </div>
    </div>
  );
}

export default Home;

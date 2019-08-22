import React, {Component} from 'react';
import Header from '../Header/index.js';
import Restaurant from '../Restaurant/index';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './index.css';


class Search extends Component {

    clickRestaurants = () => {
    this.props.history.push('/search')
  };

    clickComments = () => {
    this.props.history.push('/comments')
  };


    clickUsers = () => {
    this.props.history.push('/users')
  };

    render() {
        return (
            <div>
                <Header/>
                <div className="SearchSection2">
                    <input type="text" className="searchInput2" placeholder="Search"/>
                </div>
                <div className="Nav-Section">
                    <p className="Nav-Text" onClick={this.clickRestaurants}>RESTAURANTS</p>
                    <p className="Nav-Text" onClick={this.clickComments}>COMMENTS</p>
                    <p className="Nav-Text" onClick={this.clickUsers}>USERS</p>
                </div>
                <div className="RestaurantSection">
                </div>
            </div>
        );
    }
}

export default withRouter(connect()(Search));
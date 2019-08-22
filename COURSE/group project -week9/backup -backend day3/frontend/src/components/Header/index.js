import React from 'react';
import logo from '../../multimedia/logo.svg';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './index.css';


function Header(props){

      const clickHome = () => {
    props.history.push('/')
  };

    const clickSearch = () => {
    props.history.push('/search')
  };

    const clickProfile = () => {
    props.history.push('/profile')
  };


    const clickSignup = () => {
    props.history.push('/signup')
  };

    const clickLogin = () => {
    props.history.push('/login')
  };

    return(
        <div className="Header">
            <img src={logo} alt="logo" className="Logo"/>
            <div className="Nav">
                <div className="Nav-item" onClick={clickHome}>
                    Home
                </div>
                <div className="Nav-item" onClick={clickSearch}>
                    Search
                </div>
                <div className="Nav-item" onClick={clickProfile}>
                    Profile
                </div>
                <button className="Signup-button" onClick={clickSignup}>
                    SIGNUP
                </button>
                <button className="Login-button" onClick={clickLogin}>
                    LOGIN
                </button>
            </div>
        </div>
    )
}

export default withRouter(connect()(Header));
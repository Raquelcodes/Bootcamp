import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

//import HOC & auth
import AuthComponent from './components/HOC'
import {getToken} from './store/action/loginAction.js';

//import components
import Home from './Home';
import store from './store/index';
import Search from './components/Search/index';
import Login from './components/Login/index';
import Signup from './components/Signup/index';
import Profile from './components/Profile/index';
import RestaurantPage from './components/RestaurantPage/index';
import NewRestaurant from './components/NewRestaurant/index';
import Restaurant from './components/Restaurant/index';
import Users from './components/Users/index';

import Comments from './components/Comments/index'
//import actions


const token = localStorage.getItem('token');
if (token) {
    store.dispatch(getToken(token))
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/search" component={Restaurant}/>
                <Route exact path="/profile" component={AuthComponent(Profile)}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/restaurantpage" component={RestaurantPage}/>
                <Route exact path="/newrestaurant" component={NewRestaurant}/>
                <Route exact path="/users" component={Users}/>
                <Route exact path="/comments" component={Comments}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App";
import { Provider } from "react-redux";
import { store } from "./store";
import Login from "../src/containers/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "../src/components/Feed";
import { login } from "../src/store/actions/loginAction";
import AuthComponent from "../src/RequiredAuthorization";
import UserProfile from "../src/components/UserProfile";
import UserList from "./components/Users/index";
import MyProfile from "./components/MyProfile/index";
import LikesList from "./components/LikesList/index.js";
import FollowedUsers from "./components/FollowedUsers/index";

//to get the token stored in localStorage in the browser if user refreshes page -ie the user will not get logged out by refreshing page
const token = localStorage.getItem("token");
if (token) {
  store.dispatch(login(token));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      <Switch>
        <Route exact path="/login/" component={Login} />
        <Route exact path="/feed/" component={AuthComponent(Feed)} />
        <Route exact path="/users/" component={AuthComponent(UserList)} />
        <Route
          exact
          path="/users/following/"
          component={AuthComponent(FollowedUsers)}
        />
        <Route
          exact
          path="/users/:userId/"
          component={AuthComponent(UserProfile)}
        />
        <Route exact path="/me/" component={AuthComponent(MyProfile)} />
        <Route exact path="/posts/likes" component={AuthComponent(LikesList)} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

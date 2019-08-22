import React from "react";
import { logout } from "../../store/actions/loginAction";
import { connect } from "react-redux";
import { getUserAction } from "../../store/actions/getUsersActions";
import { withRouter } from "react-router";
import { getMyProfile } from "../../store/actions/getMyProfileAction";
import "./index.css";

const Header = ({ dispatch, history }) => {
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleGetusers = () => {
    const get = dispatch(getUserAction());
    if (get) {
      history.push("/users/");
    }
  };

  const handleMyProfile = () => {
    const get = dispatch(getMyProfile());
    if (get) {
      history.push("/me/");
    }
  };

  return (
    <div>
      <nav>
        <div className="nav-bar">
          <div className="logo-container">
            {/* <img className="logo" src={require("/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/alien_logo.png")}/> */}
            <a
              href="http://localhost:3000/feed/"
              className="nav-bar"
              class="brand-logo"
            >
              Motion
            </a>
            {localStorage.getItem("token") ? (
              <ul className="nav-bar" class="right hide-on-med-and-down">
                <li>
                  <a href="http://localhost:3000/feed/">Feed</a>
                </li>
                <li>
                  <a onClick={handleGetusers}>Users</a>
                </li>
                <li>
                  <a onClick={handleMyProfile}>My Profile</a>
                </li>

                <li>
                  <a onClick={handleLogout}>Log Out</a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(connect()(Header));

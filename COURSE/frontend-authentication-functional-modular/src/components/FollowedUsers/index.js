import React, { Component } from "react";
import { getFollowedUsers } from "../../store/actions/getFollowedUsersAction";
import { getUserProfile } from "../../store/actions/getUserProfileAction";
import { connect } from "react-redux";
import MyProfile from "../MyProfile/index";
import "./index.css";
import { getMyProfile } from "../../store/actions/getMyProfileAction";


class FollowedUsers extends Component {
  componentDidMount(){
    this.props.dispatch(getMyProfile())

  }
    
    handleUserProfile = id => {
    const profile = this.props.dispatch(getUserProfile(id));
    if (profile) this.props.history.push(`/users/${id}`);
  };

  render() {
    console.log("followed", this.props.myprofile)
    return (
        <>
        <MyProfile />
      <div>
        {this.props.followedusers
          ? this.props.followedusers.map(followeduser => {
              return (
                <div className="user">
                  <div >
                    <div class="card horizontal">
                      <div >
                        <img
                          className="profile-picture"
                          src={require("/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/alien_default.png")}
                        />
                      </div>
                      <div >
                        <div class="card-content">
                          <p className="username-button">
                            {followeduser.username}
                          </p>
                          <div className="footer-followed-users">
                            <p
                              class=" btn-large"
                              onClick={() =>
                                this.handleUserProfile(followeduser.id)
                              }
                            >
                              See profile
                            </p>
                            <p className="unfollow-button" class=" btn-large">Unfollow</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : " loading... "}
      </div>
    </>);
  }
}

const mapStateToProps = state => {
  console.log(
    "in mapsprops followed users",
    state.followedUsersReducer.followedusers,
    state.myProfileReducer.myprofile
  );
  return {
    followedusers: state.followedUsersReducer.followedusers
  };
};

export default connect(mapStateToProps)(FollowedUsers);

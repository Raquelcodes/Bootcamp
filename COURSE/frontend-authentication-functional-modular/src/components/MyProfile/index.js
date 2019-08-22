import React, { Component } from "react";
import { connect } from "react-redux";
import { me } from "../../store/actions/getMyProfileAction";
import "./index.css";
import { getMyLikedPosts } from "../../store/actions/getMyLikedPostsAction";
import { getFollowedUsersAction } from "../../store/actions/getFollowedUsersAction";

class MyProfile extends Component {
  componentDidMount() {
    this.props.dispatch(me());
  }

  handleMyLikes = () => {
    const postlikes = this.props.dispatch(getMyLikedPosts());
    console.log("likes", postlikes);
    if (postlikes) {
      this.props.history.push("/posts/likes");
    }
  };
  handleFollowedUsers = () => {
    const followed =  this.props.dispatch(getFollowedUsersAction());
    if (followed) {
      this.props.history.push("/users/following/");
    }
  };

  render() {
    //console.log(this.props.myprofile);
    return (
      <>
        {this.props.myprofile ? (
          <div>
            <div class="col s12 m7">
              <div class="card horizontal">
                <div class="card-image">
                  <img
                    className="profile-picture"
                    src={require("/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/alien_default.png")}
                  />
                </div>
                <div class="card-stacked">
                  <div className="my-profile" class="card-content">
                    <p className="name">
                      {this.props.myprofile.first_name}{" "}
                      {this.props.myprofile.last_name}
                    </p>
                    <br />
                    <p> Email: {this.props.myprofile.email}</p>
                    <p> Username: {this.props.myprofile.username}</p> <br />
                    <p>{this.props.myprofile.fame_index}</p>
                    <p>{this.props.myprofile.post_count}</p>
                  </div>
                  <div>
                    <div
                      onClick={this.handleMyLikes}
                      className="like-button-container"
                    >
                      <img
                        className="like-button"
                        src={require("/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/pixelheart.jpg")}
                      />
                      <p className="like-button-label">Favorite Posts</p>
                    </div>
                    <p class=" btn-large" onClick={this.handleFollowedUsers}>
                      Followed Users
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <p>{this.props.myprofile.first_name}</p>
            <p>{this.props.myprofile.last_name}</p>
            <p>{this.props.myprofile.email}</p>
            <p >{this.props.myprofile.username}</p>
            <p>{this.props.myprofile.fame_index}</p>
            <p>{this.props.myprofile.post_count}</p>
          <button onClick={()=>this.handleMyLikes}> My Favorite Posts</button> */}
          {this.props.children}
          </div>
        ) : (
          null
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  //console.log("in mapsprops user profile", state.myProfileReducer.myprofile);
  return {
    myprofile: state.myProfileReducer.myprofile
  };
};

export default connect(mapStateToProps)(MyProfile);

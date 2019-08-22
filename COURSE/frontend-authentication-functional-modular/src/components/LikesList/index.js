import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import { myLikedPosts } from "../../store/actions/getMyLikedPostsAction";
import MyProfile from "../MyProfile/index.js";
import { getMyProfile } from "../../store/actions/getMyProfileAction";


class LikesList extends Component {
  componentDidMount() {
    console.log("in the LikesList");
    this.props.dispatch(myLikedPosts());
    this.props.dispatch(getMyProfile());
    
  }

  render() {
    //console.log(this.props.myprofile);
    return (
      <>
        <div>
          <MyProfile/>
          {/* {this.props.myprofile?
          <MyProfile/> : "null"} */}
          {this.props.mylikes
            ? this.props.mylikes.map(mylike => {
                return (
                  <div className="post">
                    <div class="col s12 m7">
                      <div class="card horizontal">
                        <div class="card-image">
                          <img
                            className="profile-picture"
                            src={require("/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/alien_default.png")}
                          />
                        </div>
                        <div class="card-stacked">
                          <div class="card-content">
                            <p>Posted: {mylike.created}</p>
                            <p className="username">{mylike.user}</p> <br />
                            <p>{mylike.content}</p>
                          </div>
                          <div className="like-button-container">
                            <img
                              className="like-button"
                              src={require("/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/pixelheart.jpg")}
                            />
                            <p className="like-count"> {mylike.like_count}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="post">
                     <p>Posted: {mylike.created}</p>
                     <p>{mylike.user.username}</p>
                     <p>{mylike.content}</p>
                     <p>{mylike.like_count}</p>
                     
                    */}
                  </div>
                );
              })
            : "loading ... "}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  //console.log("in mapsprops mp posts", state.myLikesReducer.myLikes);
  console.log("in mapsprops mp myprofil", state.myProfileReducer.myprofile);
  
  return {
    mylikes: state.myLikesReducer.mylikes,
    //myprofile: state.myProfileReducer.myprofile

  };
};

export default connect(mapStateToProps)(LikesList);

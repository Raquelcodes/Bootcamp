import React, { Component } from "react";
import { getUsers } from "../../store/actions/getUsersActions";
import { connect } from "react-redux";
import "./index.css";
import { getUserProfile } from "../../store/actions/getUserProfileAction";
import { followUser } from "../../store/actions/followUserAction";
import { unfollowUserAction } from '../../store/actions/unfollowUserAction';

class UserList extends Component {
  state={
    follow: false
  }

  componentDidMount() {
    this.props.dispatch(getUsers());
  }

handleUserProfile = id => {
const profile= this.props.dispatch (getUserProfile(id))
  if (profile) this.props.history.push(`/users/${id}`)
}
handleFollow=(id)=> {
  this.props.dispatch(followUser(id));
  this.setState({follow:!this.state.follow})
}
handleUnfollow=(id)=>{
  this.props.dispatch(unfollowUserAction(id))
  this.setState({follow:!this.state.follow})
}

  render() {
    
    return (
      <>
      <div>
          {this.props.users
            ? this.props.users.map(user => {
                return (
                  <div className="user">
                     <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img className="profile-picture" src={require("/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/alien_default.png")}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <p className="username-button" onClick={() => this.handleUserProfile(user.id)} >{user.username}</p>
        <a className="follow-button" class=" btn-large" onClick={() => this.state.follow===false ? this.handleFollow(user.id): this.handleUnfollow(user.id)}>Follow</a>
                   </div>
       
      </div>
    </div>
  </div>
                    {/* <p className="username-button" onClick={() => this.handleUserProfile(user.id)} >{user.username}</p>
                    <button onClick={() => this.handleFollow(user.id)}>Follow</button> */}
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
  // console.log("in mapsprops users", state.userReducer)
  //console.log("in mapsprops users", state.userReducer.users);
  return {
    users: state.userReducer.users
  };
};

export default connect(mapStateToProps)(UserList);

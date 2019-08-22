import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import { userProfile } from "../../store/actions/getUserProfileAction";
import { followUser } from "../../store/actions/followUserAction";

class UserProfile extends Component {
  componentDidMount() {
    this.props.dispatch(userProfile());
  }
  handleFollow=(id)=> {
    this.props.dispatch(followUser(id));
  }

  render() {
    
        return (
      <>
     {this.props.profile ? 
       <div class="col s12 m7">
       <div class="card horizontal">
         <div class="card-image">
           <img className="profile-picture" src={require("/Users/raquel/Desktop/PROPULSION_codeBootcamp/frontend-authentication-functional-modular/src/assets/alien_default.png")}/>
         </div>
         <div class="card-stacked">
           <div className="my-profile" class="card-content">
           <br></br>
               <p className="username">{this.props.profile.username}</p> <br/>
               <p>Fame points: {this.props.profile.fame_index}</p>
           <p> Posts: {this.props.profile.post_count}</p>
           </div >
           <div className="user-profile-container">
           <a className="follow-button" class=" btn-large" onClick={() => this.handleFollow(this.props.profile.id)}>Follow</a>
           </div>
           </div>
         </div>
       </div>
       
        // <div className="user">
        //   <p className="username-button">{this.props.profile.username}</p>
        //   <p>{this.props.profile.fame_index}</p>
        //   <p>{this.props.profile.post_count}</p>
        //   <button onClick={() => this.handleFollow(this.props.profile.id)}>Follow</button>
        // </div>
      : "user profile loading"}
      </>
     )
  }
}
const mapStateToProps = state => {
//   console.log("in mapsprops user profile", state.profileReducer);
  //console.log("in mapsprops user profile", state.profileReducer.profile);
  return {
    profile: state.profileReducer.profile,
  };
};

export default connect(mapStateToProps)(UserProfile);

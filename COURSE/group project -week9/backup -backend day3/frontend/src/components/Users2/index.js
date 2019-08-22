import React, { Component } from "react";
import { getUsers } from "../../store/action/getUsersActions";
import { connect } from "react-redux";
import "./index.css";
import { getUserProfile } from "../../store/actions/getUserProfileAction";
import CreateUsers from "../Users/createUsers";

class UserList extends Component {


  componentDidMount() {
    this.props.dispatch(getUsers());
  }

handleUserProfile = id => {
const profile= this.props.dispatch (getUserProfile(id))
  if (profile) this.props.history.push(`/users/${id}`)
}

  render() {

    return (
      <>
      <div>
          {this.props.users
            ? this.props.users.map(user => {
                return (
                  <div className="Create-users-section1">
                    <div className="Create-users-section2">

                    </div>
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

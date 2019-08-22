// login related functions and rendering

import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";

const Login = ({ dispatch, history }) => {
  const [username, setUsername] = useState("fake3");
  const [password, setPassword] = useState("propulsion");

  const login = async e => {
    e.preventDefault();
    const data = await dispatch(loginAction({ username, password }));
    //console.log("the data", data);
    //console.log("history", history)
    if (data) history.push("/feed/"); //to push to path feed if there is a login action
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button class=" btn-large">Login</button>
      </form>
    </div>
  );
};

export default connect()(Login);

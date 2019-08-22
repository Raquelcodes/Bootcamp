import Axios from "axios";

export const login = token => {
  return {
    type: "login",
    payload: token
  };
};

const error = error => {
  return {
    type: "error",
    payload: error
  };
};

export const logout = () => {
  return {
    type: "logout"
  };
};

//loginAction has access to dispatch and getState bc it is called/dispatched in login container which as access to these props
export const loginAction = ({ username, password }) => async (
  dispatch,
  getState
) => {
  //console.log("getState in loginAction", getState);
  try {
    const response = await Axios.post(
      "https://motion.propulsion-learn.ch/backend/api/auth/token/",
      { username, password }
    );

    //console.log("post response of loginAction", response);
    const token = response.data.access; //selecting the access token in the server response
    localStorage.setItem("token", token); // stores token value in local storage key is 'token' and the value is token which comes in the server response
    dispatch(login(token)); //passes token value to the login action creator above passing dispatching it t the reducer and thus the state
    return response;
  } catch (e) {
    dispatch(error("wrong username or password - try again!"));
  }
};

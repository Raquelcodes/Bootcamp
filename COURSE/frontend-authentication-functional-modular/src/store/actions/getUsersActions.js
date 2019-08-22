import Axios from "axios";

export const getUsers = users => {
  return {
    type: "getusers",
    payload: users
  };
};

export const getUserAction = () => async (dispatch, getState) => {
  const token = getState().loginReducer.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await Axios.get(
    "https://motion.propulsion-learn.ch/backend/api/users/",
    config
  );
  //console.log("response getUsers", response);
  const users = response.data;

  dispatch(getUsers(users));
  return response;
};

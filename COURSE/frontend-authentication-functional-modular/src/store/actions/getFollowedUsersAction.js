import Axios from "axios";

export const getFollowedUsers = followedusers => {
  return {
    type: "getfollowedusers",
    payload: followedusers
  };
};

export const getFollowedUsersAction = () => async (dispatch, getState) => {
  const token = getState().loginReducer.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await Axios.get(
    "https://motion.propulsion-learn.ch/backend/api/users/following/",
    config
  );
  console.log("response followedUsers", response);
  const followedusers = response.data;

  dispatch(getFollowedUsers(followedusers));
  return response;
};

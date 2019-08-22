import Axios from "axios";

export const userProfile = user => {
  return {
    type: "getuserprofile",
    payload: user
  };
};

export const getUserProfile = (id) => async (dispatch, getState) => {
  const token = getState().loginReducer.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await Axios.get(
    `https://motion.propulsion-learn.ch/backend/api/users/${id}`,
    config
  );
  //console.log("response getUserProfile", response);
  const user = response.data;

  dispatch(userProfile(user));
  return response;
};

import Axios from "axios";

export const followUser = (id ) => async (dispatch, getState) => {
  const token = getState().loginReducer.token;
  //console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  

  const response = await Axios.post(
    `https://motion.propulsion-learn.ch/backend/api/users/follow/${id}/`,
    "",
    config
  );
  console.log("follow user response", response);
  return response;
};

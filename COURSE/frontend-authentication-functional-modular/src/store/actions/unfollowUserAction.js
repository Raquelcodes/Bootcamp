import Axios from "axios";
import { getFeed } from "./feedActions";

export const unfollowUserAction = ( id ) => async (dispatch, getState) => {
  //console.log("likePost id", id);
  const token = getState().loginReducer.token;
  //console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  

  const response = await Axios.delete(
    `https://motion.propulsion-learn.ch/backend/api/users/follow/${id}/`,
    
    config
  );
  console.log("unfollow post response", response);
  dispatch(getFeed());
  return response;
};

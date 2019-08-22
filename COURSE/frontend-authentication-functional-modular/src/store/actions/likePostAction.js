import Axios from "axios";
import { getFeed } from "./feedActions";

export const likePost = ( id ) => async (dispatch, getState) => {
  //console.log("likePost id", id);
  const token = getState().loginReducer.token;
  //console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  

  const response = await Axios.post(
    `https://motion.propulsion-learn.ch/backend/api/posts/like/${id}/`,
    "",
    config
  );
  console.log("add post response", response);
  dispatch(getFeed());
  return response;
};

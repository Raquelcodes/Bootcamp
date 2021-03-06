import Axios from "axios";
import { getFeed } from "./feedActions";

export const dislikePost = ( id ) => async (dispatch, getState) => {
  //console.log("likePost id", id);
  const token = getState().loginReducer.token;
  //console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  

  const response = await Axios.delete(
    `https://motion.propulsion-learn.ch/backend/api/posts/like/${id}/`,
    
    config
  );
  console.log("dislike post response", response);
  dispatch(getFeed());
  return response;
};

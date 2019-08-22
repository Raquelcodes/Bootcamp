import Axios from "axios";
import { getFeed } from "./feedActions";

export const addPostToFeed = ({ content }) => async (dispatch, getState) => {
  //console.log("newPost", newPost);
  const token = getState().loginReducer.token;
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const data = {
    // content: JSON.stringify(content)
    content: content
  };

  const response = await Axios.post(
    "https://motion.propulsion-learn.ch/backend/api/posts/new-post/",
    data,
    config
  );
  console.log("add post response", response);
   dispatch(getFeed());
  return response;
};

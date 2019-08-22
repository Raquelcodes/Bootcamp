import Axios from "axios";

export const feed = posts => {
  return {
    type: "getfeed",
    payload: posts
  };
};


export const getFeed = () => async (dispatch, getState) => {
  const token = getState().loginReducer.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await Axios.get(
    "https://motion.propulsion-learn.ch/backend/api/feed/",
    config
  );
  //   console.log("response", response);
  const posts = response.data;

  dispatch(feed(posts));
  return response;
};

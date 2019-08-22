import Axios from "axios";

export const myLikedPosts = mylikes => {
  return {
    type: "getmylikes",
    payload: mylikes
  };
};


export const getMyLikedPosts = () => async (dispatch, getState) => {
  const token = getState().loginReducer.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await Axios.get(
    "https://motion.propulsion-learn.ch/backend/api/posts/likes",
    config
  );
     console.log("response my likes", response);
  const mylikes = response.data;

  dispatch(myLikedPosts(mylikes));
  return response;
}
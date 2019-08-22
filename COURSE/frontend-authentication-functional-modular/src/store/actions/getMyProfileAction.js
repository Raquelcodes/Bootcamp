import Axios from "axios";

export const me = myprofile => {
  return {
    type: "getmyprofile",
    payload: myprofile
  };
};


export const getMyProfile = () => async (dispatch, getState) => {
  const token = getState().loginReducer.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await Axios.get(
    "https://motion.propulsion-learn.ch/backend/api/me/",
    config
  );
  //   console.log("response", response);
  const myprofile = response.data;

  dispatch(me(myprofile));
  return response;
}
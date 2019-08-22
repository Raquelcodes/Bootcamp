import axios from 'axios'

const URL = `https://http://157.230.114.149/backend`;

export const getProfile = response => {
    console.log("in get profile action")
    console.log("payload to be sent:", response)
    return {
        type: 'UserProfile',
        payload: response
    }
}

export const profileAction = () => async (dispatch, getState) => {
    console.log("in profileAction")
    const token = getState().loginReducer.token
    console.log("token taken from state:",token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    console.log("header for profile-reducer:",config)
    console.log("will try to fetch from /users/me/")
    const response = await axios.get(`${URL}/users/me/`, config);
    console.log("fetched from users/me/",response)
    dispatch(getProfile(response.data))
    console.log("response dispatched to reducer")
    return response
};
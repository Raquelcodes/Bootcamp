import axios from 'axios'
const URL = `http://157.230.114.149/backend`;

export const restaurant = data => {
    return {
        type: 'Data',
        payload: data
    }
}

export const getRestaurant = () =>  async (dispatch, getState) => {
    const response = await axios.get(`${URL}/restaurants/`);
    dispatch(restaurant(response.data))
  };
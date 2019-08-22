import axios from '../../axios';

export const login = token => {
    return {
        type: 'Login',
        payload: token
    }
};

const error = error => {
    return {
      type: 'Error',
      payload: error
    }
  };


export const logout = () => {
    return {
      type: 'Logout'
    }
  };

export const getToken = (body) => async (dispatch, getStore) => {
    try {
        const response = await axios.post("/api/token/",body)
        const token = response.data.access;
        localStorage.setItem('token', token)
        dispatch(login(token));
        return response;
    }catch(event){
        dispatch(error('Wrong username or password'))
    }
};
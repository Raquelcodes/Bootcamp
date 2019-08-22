

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'Login': {
          return { ...state, token: action.payload, error: null, authenticated: true }
        }
        case 'Error': {
          return { ...state, token: null, error: action.payload, authenticated: false }
        }
        case 'Logout': {
          localStorage.clear();
          return { ...state, token: null, error: null, authenticated: false }
        }
        default:
          return state
      }
}

export default loginReducer




const profileReducer = (state = {}, action) => {
    console.log("in profile reducer")
    console.log("in state reducer", state)
    console.log("in action reducer", action)

    switch (action.type) {
        case 'UserProfile': {
            console.log("in profile reducer switch")
            return {...state, profile: action.payload}
        }
        default:
            console.log("in profile reducer but outside switch")
          return state
      }
}

export default profileReducer


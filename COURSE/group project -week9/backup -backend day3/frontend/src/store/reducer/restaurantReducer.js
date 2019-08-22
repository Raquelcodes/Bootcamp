
const initialstate = () => {
    return {
        restaurant: {

        }
    }
};

const restaurantReducer = (state = [], action) => {
    switch (action.type){
        case 'Data': {
            const newState = [...state];
            const result = newState.concat(action.payload)
            return result
        }
        default:
        return state
    }
};

export default restaurantReducer
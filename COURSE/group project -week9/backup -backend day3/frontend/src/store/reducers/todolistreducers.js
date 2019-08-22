const initState = ['Learn Redux', 'Master React']

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const todos = [...state, action.payload]
            console.log("new state:", todos)
            return todos
        default:
                 return ['Learn Redux', 'Master React']
    }
}

export default todoListReducer

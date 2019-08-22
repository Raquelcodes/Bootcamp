export const addTodoAction = content => {
    return ({
        type: 'ADD_TODO',
        payload: content
    })
}

export const makeFilterUpdate = content => {
    return ({
        type: 'filter',
        payload: content
    })
}



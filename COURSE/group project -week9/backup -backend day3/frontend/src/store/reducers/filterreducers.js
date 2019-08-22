const initState = { filter: 'all'}

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'completed':
            const newFilter1 = { filter: 'completed'}
            console.log("new filter:", newFilter1)
            return newFilter1
        case 'pending':
            const newFilter2 = { filter: 'pending'}
            console.log("new filter:", newFilter2)
            return newFilter2
        default:
            return { filter: 'all'}
    }
}

export default filterReducer

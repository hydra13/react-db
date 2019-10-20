const initState = {
    users: [],
    fetching: false,
    fetched: false,
    error: null
}
export default function reducer(state=initState, action) {
    switch (action.type) {
        case 'FETCH_USERS_PENDING': {
            return { ...state, fetching: true, fatched: false, error: null }
        }
        case 'FETCH_USERS_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload
            }
        }
        case 'FETCH_USERS_REJECTED': {
            return { ...state, fetching: false, error: action.payload }
        }
    }
    return state;
}
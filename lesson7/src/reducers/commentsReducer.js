const initState = {
    comments: [],
    fetching: false,
    fetched: false,
    error: null
}
export default function reducer(state=initState, action) {
    switch (action.type) {
        case 'FETCH_COMMENTS_PENDING': {
            return { ...state, fetching: true, fatched: false, error: null }
        }
        case 'FETCH_COMMENTS_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                comments: action.payload
            }
        }
        case 'FETCH_COMMENTS_REJECTED': {
            return { ...state, fetching: false, error: action.payload }
        }
    }
    return state;
}
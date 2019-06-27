export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_PROFILE_REQUEST':
            break;
        case 'GET_PROFILE_SUCCESS':
            state = {
                ...state,
                data: action.payload,
                status: 1
            }
            break;
        case 'GET_PROFILE_FAILURE':
            state = {
                ...state,
                data: action.payload,
                status: 2
            }
    }
    return state
}
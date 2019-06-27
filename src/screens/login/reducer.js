export default function (state = {}, action) {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            break;
        case 'LOGIN_SUCCESS':
            state = {
                ...state,
                data: action.payload,
                status: 1
            }
            break;
        case 'LOGIN_FAILURE':
            state = {
                ...state,
                data: action.payload,
                status: 2
            }
            break;
    }
    return state
}
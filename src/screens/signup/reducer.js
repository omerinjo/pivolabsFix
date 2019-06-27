export default function (state = {}, action) {
    switch (action.type) {
        case 'REGISTER_REQUEST':
            break;
        case 'REGISTER_SUCCESS':
            state = {
                ...state,
                data: action.payload,
                status: 1
            }
            break;
        case 'REGISTER_FAILURE':
            state = {
                ...state,
                data: action.payload,
                status: 2
            }
    }
    return state
}
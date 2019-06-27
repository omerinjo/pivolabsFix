export default function (state = {}, action) {
    switch (action.type) {
        case 'CHANGE_PASS_REQUEST':
            break;
        case 'CHANGE_PASS_SUCCESS':
            state = {
                ...state,
                data: action.payload,
                status: 1
            }
            break;
        case 'CHANGE_PASS_FAILURE':
            state = {
                ...state,
                data: action.payload,
                status: 2
            }
    }
    return state
}
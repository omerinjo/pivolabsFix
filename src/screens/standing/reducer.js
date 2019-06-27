export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_STANDING_REQUEST':
            break;
        case 'GET_STANDING_SUCCESS':
            state = {
                //  ...state,
                data: action.payload,
                status: 1
            }
            break;
        case 'GET_STANDING_FAILURE':
            state = {
                ...state,
                data: action.payload,
                status: 2
            }
            break;
        case 'LIKE_SUCCESS':
            state = {
                ...state,
                like: action.payload,
                status: 3
            }
            break;
        case 'UNLIKE_SUCCESS':
            state = {
                ...state,
                unlike: action.payload,
                status: 4
            }
            break;
    }
    return state
}
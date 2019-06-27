import * as types from './types';


function changePassRequest() {
    return {
        type: types.CHANGE_PASS_REQUEST
    }
}

function changePassSuccess(response) {
    return {
        type: types.CHANGE_PASS_SUCCESS,
        payload: response
    }
}

function changePassFailure(error) {
    return {
        type: types.CHANGE_PASS_FAILURE,
        payload: error
    }
}

export function changePass(data) {
    var { token, password } = data
    return async (dispatch) => {
        dispatch(changePassRequest())
        try {
            const url = 'http://localhost:3000/api/me/update-password';
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({
                    password
                })
            }).then(res => res.json())
            dispatch(changePassSuccess(response))
        } catch (error) {
            dispatch(changePassFailure(error))
        }
    }
}




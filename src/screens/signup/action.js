import * as types from './types'

function registerRequest() {
    return {
        type: types.REGISTER_REQUEST
    }
}


function registerSuccess(response) {
    return {
        type: types.REGISTER_SUCCESS,
        payload: response
    }
}

function registerFailure(error) {
    return {
        type: types.REGISTER_FAILURE,
        payload: error
    }
}

export function register(data) {
    const { email, password, first_name, last_name } = data
    return async (dispatch) => {
        dispatch(registerRequest())
        try {
            const url = 'http://localhost:3000/api/signup';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    first_name: first_name,
                    last_name: last_name
                })
            }).then(res => res.json());
            dispatch(registerSuccess(response));
        } catch (error) {
            dispatch(registerFailure(error));
        }
    }

}
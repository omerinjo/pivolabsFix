import * as types from './types'

function loginUserRequest() {
    return {
        type: types.LOGIN_REQUEST
    }
}

function loginSuccess(data) {
    return {
        type: types.LOGIN_SUCCESS,
        payload: data
    }
}

function loginError(error) {
    return {
        type: types.LOGIN_FAILURE,
        payload: error
    }
}

export function loginUser(user) {
    const { email, password } = user
    return async (dispatch) => {
        dispatch(loginUserRequest())
        try {
            const url = "http://localhost:3000/api/login"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(res => res.json())
            dispatch(loginSuccess(response))

        } catch (error) {
            dispatch(loginError(error))
        }
    }
}

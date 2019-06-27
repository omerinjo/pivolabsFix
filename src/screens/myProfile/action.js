import * as types from './types';

function getMyProfileRequest() {
    return {
        type: types.GET_PROFILE_REQUEST
    }
}

function getMyProfleSuccess(response) {
    return {
        type: types.GET_PROFILE_SUCCESS,
        payload: response
    }
}


function getMyProfleFailure(error) {
    return {
        type: types.GET_PROFILE_FAILURE,
        payload: error
    }
}


export function getMyProfle(data) {
    const { user, token } = data
    console.log(user)
    return async (dispatch) => {
        dispatch(getMyProfileRequest())
        try {
            const url = `http://localhost:3000/api/me/${user}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': token
                }
            }).then(res => res.json());
            dispatch(getMyProfleSuccess(response));
        } catch (error) {
            dispatch(getMyProfleFailure(error))
        }
    }
}
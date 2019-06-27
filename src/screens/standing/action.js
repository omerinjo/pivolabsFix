import * as types from './types';

function getStandingRequest() {
    return {
        type: types.GET_STANDING_REQUEST
    }
}

function getStandingSuccess(data) {
    return {
        type: types.GET_STANDING_SUCCESS,
        payload: data
    }
}

function getStandingFailure(error) {
    return {
        type: types.GET_STANDING_FAILURE,
        payload: error
    }
}


function unlikeUserSuccess(response) {
    return {
        type: types.UNLIKE_SUCCESS,
        payload: response
    }
}

function likeUserSuccess(response) {
    return {
        type: types.LIKE_SUCCESS,
        payload: response
    }
}


export function getStanding(data) {
    const { page, offset } = data
    return async (dispatch) => {
        dispatch(getStandingRequest())
        try {
            const url = `http://localhost:3000/api/mostliked/${page}/${offset}`;
            const response = await fetch(url).then(res => res.json());
            dispatch(getStandingSuccess(response))
        } catch (error) {
            dispatch(getStandingFailure(error))
        }
    }
}



export function likeUser(token, user) {
    return async (dispatch) => {
        try {

            const url = `http://localhost:3000/api/user/${user}/like`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': token
                },
            }).then(res => res.json())
            dispatch(likeUserSuccess(response))
        } catch (error) {

        }
    }
}



export function unlikeUser(token, user) {
    return async (dispatch) => {
        try {

            const url = `http://localhost:3000/api/user/${user}/unlike`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': token
                },
            }).then(res => res.json())
            dispatch(unlikeUserSuccess(response))
        } catch (error) {

        }
    }
}
import {
    GET_USERS_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
} from './../constants/UsersConstants'
import axios from 'axios'

export const fetchUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users,
    }
}

export const fetchUsersFail = (error) => {
    return {
        type: GET_USERS_FAIL,
        payload: error,
    }
}

export const fetchUsersRequest = () => {
    return (dispatch) => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                dispatch(fetchUsersSuccess(res.data))
            })
            .catch((err) => {
                dispatch(fetchUsersFail(err.message))
            })
    }
}

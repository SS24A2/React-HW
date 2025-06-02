import {
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
} from './../constants/UsersConstants'

const initialState = {
    users: [],
    error: undefined,
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
            }

        case GET_USERS_FAIL:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state
    }
}
export default UsersReducer

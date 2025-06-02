import {FETCH_COMMENTS_REQUEST,FETCH_COMMENTS_SUCCESS,FETCH_COMMENTS_FAIL} from './../constants/CommentsConstants';

const initialState = {
    comments:[],
    error:undefined,
    isLoading:true
}

const CommentsReducer = (state=initialState,action) => {

    switch(action.type){
        case FETCH_COMMENTS_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:undefined
            }
        case FETCH_COMMENTS_SUCCESS:
            return{
                ...state,
                comments:action.payload,
                isLoading:false,
            }
        case FETCH_COMMENTS_FAIL:
            return{
                ...state,
                error:action.payload,
                isLoading:false,
            }
        default: return state;
    }
}

export default CommentsReducer
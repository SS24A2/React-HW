import {FETCH_COMMENTS_REQUEST,FETCH_COMMENTS_SUCCESS,FETCH_COMMENTS_FAIL} from './../constants/CommentsConstants';
import axios from 'axios';

export const fetchCommentsSuccess = (comments) => { // comments -> Array(500)
    return{
        type:FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFail = (error) => { //error message
    return{
        type:FETCH_COMMENTS_FAIL,
        payload:error
    }
}

export const fetchCommentsRequest = () =>{
    return dispatch =>{
        axios.get('https://jsonplaceholder.typicode.com/comments') // povik do url za get data
            .then(res=>dispatch(fetchCommentsSuccess(res.data))) // ako e uspesna akcijata dispatch na akcija za comments success
            .catch(err=>dispatch(fetchCommentsFail(err.message))) //ako e neupspesna akcijata dispatch napravi za comments fail
    }
}
import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchCommentsRequest} from './../actions/CommentsActions';

export const Comments = () => {

    const dispatch = useDispatch();
    const comments = useSelector(state=>state.CommentsReducer.comments);
    const greska = useSelector(state=>state.CommentsReducer.error); 
    const isLoading = useSelector(state=>state.CommentsReducer.isLoading);
    console.log(isLoading)

    useEffect(()=>{
        setTimeout(()=>{dispatch(fetchCommentsRequest())},10000)
    },[dispatch])

    return(
       !isLoading ?  <div id='comments'>
          {comments.map(comment=>{
            return(
                <div key={comment.id}>
                    <p><span>Name: </span> {comment.name}</p>
                    <p><span>Email: </span>{comment.email}</p>
                    <p><span>Body: </span> {comment.body}</p>
                    <hr/>
                </div>
            )
          })}
          {greska && <h1>{greska}</h1>}
        </div> : <h1>Loading...</h1>
    )
}


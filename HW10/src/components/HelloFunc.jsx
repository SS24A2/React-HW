import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {sayHello,sayFarewell} from './../actions/SayHelloActions';

export const HelloFunc = () => {

    const dispatch = useDispatch();
    const greeting = useSelector(state=>state.SayHelloReducer.greeting);
    const farewell = useSelector(state=>state.SayHelloReducer.farewell);


    useEffect(()=>{
        dispatch(sayHello());
        dispatch(sayFarewell())
    },[])

    return(
        <div id='hello-func'>
            <h2>{greeting}</h2>
            <p>{farewell}</p>
        </div>
    )
}
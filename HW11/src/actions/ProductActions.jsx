import {GET_PRODUCT_FAIL,GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS} from './../constants/ProductConstants';
import axios from 'axios';

export const fetchProductSuccess = (products) => {
    return{
        type:GET_PRODUCT_SUCCESS,
        payload: products
    }
}

export const fetchProductFail = (error) =>{
    return{
        type: GET_PRODUCT_FAIL,
        payload:error
    }
}

export const fetchProductRequest = (limit,skip) =>{
    return dispatch =>{
        axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
                .then(res=>{
                    dispatch(fetchProductSuccess(res.data))
                })
                .catch(err=>{
                    dispatch(fetchProductFail(err.message))
                })
    }
}
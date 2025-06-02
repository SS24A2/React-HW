import {GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL} from './../constants/ProductConstants';

const initialState = {
    products:[],
    error:undefined
}

const ProductReducer = (state=initialState,action) =>{


    switch(action.type){


        case GET_PRODUCT_SUCCESS:
            return{
                ...state,
                products:action.payload.products
            }

        case GET_PRODUCT_FAIL:
            return{
                ...state,
                error:action.payload
            }

        default: return state;
    }

}

export default ProductReducer;
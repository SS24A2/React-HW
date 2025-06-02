import { BUY_CAKE, RESTOCK_CAKES } from './../constants/CakeConstants'

const initialState = {
    cakes: 10,
    // message: undefined
}

const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state, //10          //1
                cakes: state.cakes - action.payload,
                //message: undefined
            }
        // if(state.cakes - action.payload >=0){

        //     return{
        //         ...state, //10          //1
        //         cakes: state.cakes - action.payload,
        //         message: undefined
        //     }
        // }
        // else{
        //     return{
        //         ...state,
        //         message: `Not enough cakes!!! Only ${state.cakes} left`
        //     }
        // }
        case RESTOCK_CAKES:
            return {
                ...state,
                cakes: state.cakes + parseInt(action.payload),
            }

        default:
            return state
    }
}

export default CakeReducer

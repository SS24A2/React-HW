const initialState = {
    greeting: 'Hi !!',
    farewell: 'Bye'
}
    //action {type:'Say_Hello',payload: 'Hello and welcome'}
    //action {type:'Say_goodbye',payload:'Thanks for visiting...'}
const SayHelloReducer = (state=initialState,action) =>{

    switch(action.type){

        case "SAY_HELLO":
            return{
                ...state,
                greeting: action.payload
            }
        
        case "SAY_GOODBYE":
            return{
                ...state,
                farewell: action.payload
            }



        default: return state;
    }

}


export default SayHelloReducer;
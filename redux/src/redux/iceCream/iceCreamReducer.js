const BUY_ICECREAM  = "BUY_ICECREAM";

const initialState ={
    noOficecream:10,
}
const icecreamReducer=(state=initialState,action)=>{
    switch(action.type) {
        case BUY_ICECREAM: 
        if(state.noOficecream>0) {
        return{
            ...state,
            noOficecream: state.noOficecream-1
        }
        } else {
            alert("0 Count Remainging for Ice Cream")
        }
        break;
        default : return state
    }
}
export default icecreamReducer
const BUY_CAKE  = "BUY_CACK";

const initialState ={
    noOfCakes:10,
}
const cakeReducer=(state=initialState,action)=>{
    switch(action.type) {
        case BUY_CAKE: 
        if(state.noOfCakes>0) {
        return{
            ...state,
            noOfCakes: state.noOfCakes-action.payload
        }
        } else {
            alert('0 Count Remaining Cake')
        }
        break;
        default : return state
    }
}
export default cakeReducer
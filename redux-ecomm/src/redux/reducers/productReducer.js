import { ActionTypes } from "../constents/ActionTypes"

const initialState ={
    products:[
    ]
}
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}
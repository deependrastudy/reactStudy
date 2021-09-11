import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import buyicecream from '../redux/iceCream/iceCreamAction';

export const IcecreamReducer = () => {
    const noOficecream = useSelector(state=>state.iceCream.noOficecream);
    const dispatch = useDispatch();
    return (
        <div> 
            <p>No Of IceCream :{noOficecream}</p>
            <button onClick={()=>dispatch(buyicecream())}>Buy Cake</button>
        </div>
    )
}

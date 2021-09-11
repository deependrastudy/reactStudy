import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import buyCake from '../redux/cake/cakeAction';
export const HooksContainer = () => {
    const [number,setNumber] = useState(1);
    const noOfCakes = useSelector(state=>state.cake.noOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
            <p>No Of Cakes : {noOfCakes}</p>
            <button onClick={()=>dispatch(buyCake(number))}>Buy Cake</button>
        </div>
    )
}
 
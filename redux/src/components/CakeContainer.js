import React from 'react'
import buyCake from '../redux/cake/cakeAction'
import { connect } from 'react-redux'
const CakeContainer = (props) => {
    return (
        <div>
            <p>Count : {props.noOfCakes}</p>
            <button onClick={props.buyCake}>Update</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        noOfCakes:state.cake.noOfCakes
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        buyCake:()=>{
            dispatch(buyCake())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
import React from "react";
const ProductDetails =({match})=>{
    alert("sdsda")
    console.log(match.params);
    return(<div>
        <h1>Product Details</h1>
    </div>);
}
export default ProductDetails;
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent =()=>{
    const products = useSelector((state)=>state.allProducts.products );
  //  const {id,title}  = products[0];
  const list = products.map((item)=>{
      const {id,title,image,price,category} = item;
      return(<Link to={`product-details/${id}`}><div className="col-sm-4" key={id}>
      <div className="ui link cards">
          <div className="ui cards ">
              <div className="card">
                  <div className="image">
                      <img src={image} />
                  </div>
                  <div className="content">
                    <div className="header">
                        {title}
                    </div>
                    <div className="meta price">{price}</div>
                    <div className="meta">{category}</div>
                  </div>
              </div>
          </div>
      </div>
  </div></Link>);
  })
    return(<div className="row">{list}</div>);
}
export default ProductComponent;
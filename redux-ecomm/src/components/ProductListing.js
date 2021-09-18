import React,{useEffect,useParams } from "react";
import { useSelector,useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productsActions";
import axios from "axios";
const ProductListing =()=>{
    const dispatch = useDispatch();
    const getAllProducts=()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            dispatch(setProducts(response.data));
        }).catch((err)=>{
            console.log('error',err);
        })
        
    }
    useEffect(()=>{
        getAllProducts();
    },[]);
    const products  =useSelector((state)=>state);
    console.log("aa",products);
    return(<div style={{marginTop:"20px"}} className="ui grid container">
        <ProductComponent />
    </div>);
}
export default ProductListing;
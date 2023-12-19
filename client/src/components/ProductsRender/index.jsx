import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/slices/productsSlice";
import OneItem from "../ItemRender";
import OnceOfCategoriesRender from "../OnceOfCategoriesRender";
import AllProducts from "../pages/AllProducts";


function ProductsRender(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllProducts())
    },[dispatch])
    const products = useSelector(({products}) =>products.list);
        return (
                <AllProducts products={products} />

      );

   
}
export default ProductsRender
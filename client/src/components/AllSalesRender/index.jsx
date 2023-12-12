import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/slices/productsSlice";
import AllSales from "../pages/AllSales";

function AllSalesRender(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllProducts())
    },[dispatch])
    const sales = useSelector(({products})=>products.list)
    return <AllSales products={sales} />
}
export default AllSalesRender;
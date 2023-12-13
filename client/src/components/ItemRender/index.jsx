import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/slices/productsSlice";
import OneItem from "../OneItem";


function ItemRender(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllProducts())
    }, [dispatch])
    const items = useSelector(({products})=>products.list)
    return <OneItem products= {items} />

}
export default ItemRender;
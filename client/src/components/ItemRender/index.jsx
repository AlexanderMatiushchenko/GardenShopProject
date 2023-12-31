import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import { fetchAllProducts } from "../../store/slices/productsSlice";
import OneItem from "../OneItem";


function ItemRender(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllProducts())
        dispatch(fetchCategories())
    }, [dispatch])
    const items = useSelector(({products})=>products.list)
    const category= useSelector(({categories})=>categories.list)
    return <OneItem products= {items} categories={category} />

}
export default ItemRender;
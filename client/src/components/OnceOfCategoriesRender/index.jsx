import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import { fetchAllProducts } from "../../store/slices/productsSlice";
import OnceOfCategories from "../OnceOfCategories";


function OnceOfCategoriesRender() {
  const dispatch = useDispatch();
useEffect(()=>{
    dispatch(fetchCategories());
},[dispatch])

const categories= useSelector(({categories})=>categories.list)

useEffect(()=>{
    dispatch(fetchAllProducts());
},[dispatch])

const products = useSelector(({products})=>products.list)

return <OnceOfCategories categories={categories} products={products} />
}

export default OnceOfCategoriesRender;

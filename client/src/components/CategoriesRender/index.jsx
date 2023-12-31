
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import Categories from "../pages/Categories";


function CategoriesRender() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector(({ categories }) => categories.list);

  return <Categories categories={categories} />;

}

export default CategoriesRender;

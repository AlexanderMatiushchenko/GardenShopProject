import React, { useEffect } from 'react';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import ErrorPage from "./components/pages/ErrorPage";
import Contact from './components/pages/Contacts';
import Header from './components/pages/Header/';

import OneItem from './components/ItemRender';
import HomePage from './components/pages/HomePage'
import CategoriesRender from './components/pages/CategoriesRender';
import Basket from './components/pages/Basket';
import ProductsRender from './components/ProductsRender';
import AllSalesRender from './components/AllSalesRender';
import ItemRender from './components/ItemRender';
import OnceOfCategoriesRender from './components/OnceOfCategoriesRender';
import CategoriesCarousel  from './components/CategoriesCarousel';

function App() {

  return (
    <>
     
    
      <Header />
    
      {/* <ProductsRender />
      <CategoriesRender /> */}
      {/* <OnceOfCategoriesRender /> */}
    {/* <CategoriesCarousel /> */}
      <Routes>
        <Route path='/cart' element={<Basket />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/all" element={<CategoriesRender />} />
        <Route path='/products/all' element={<ProductsRender />} />
        <Route path = '/sales/all' element = {<AllSalesRender />} />  
        <Route path="/products/:id" element={<OneItem />} />   
        <Route path="/categories/:id" element={<OnceOfCategoriesRender />} />          
        <Route path ='*' element={<ErrorPage />} />
      </Routes>
     {/* <ItemRender /> */}

      <Contact /> 
    </>
  );
}


export default App;

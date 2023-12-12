import React, { useEffect } from 'react';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import ErrorPage from "./components/pages/ErrorPage";
import Contact from './components/pages/Contacts';
import Header from './components/pages/Header/';

import HomePage from './components/pages/HomePage'
import CategoriesRender from './components/pages/CategoriesRender';
import Basket from './components/pages/Basket';
import ProductsRender from './components/ProductsRender';
import AllSalesRender from './components/AllSalesRender';
function App() {

  return (
    <>
     
    
      <Header />
      {/* <Routes>
        <Route path='/cart' element={<Basket />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/all" element={<CategoriesRender />} />
        <Route path='/products/all' element={<ProductsRender />} />        
        <Route path ='*' element={<ErrorPage />} />
      </Routes> */}
     <AllSalesRender />
      <Contact />
    </>
  );
}


export default App;

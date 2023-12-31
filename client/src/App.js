import React from 'react';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import ErrorPage from "./components/pages/ErrorPage";
import Footer from './components/Footer';
import Header from './components/Header';
import OneItem from './components/ItemRender';
import HomePage from './components/pages/HomePage'
import CategoriesRender from './components/CategoriesRender';
import Basket from './components/Basket';
import ProductsRender from './components/ProductsRender';
import AllSalesRender from './components/AllSalesRender';
import OnceOfCategoriesRender from './components/OnceOfCategoriesRender';

function App() {

  return (
    <>
        <Header />
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
        <Footer /> 
    </>
  );
}


export default App;

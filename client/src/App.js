import React, { useEffect } from 'react';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import ErrorPage from "./components/pages/ErrorPage";
import Contact from './components/pages/Contacts';
import Header from './components/pages/Header/';

import HomePage from './components/pages/HomePage'
import CategoriesRender from './components/pages/CategoriesData';
import Basket from './components/pages/Basket';
import ProductsRender from './components/ProductsData';

function App() {

  return (
    <>
     {/* <ProductsRender /> */}
    <Basket />
      <Header />
      {/* <HomePage /> */}
{/* <CategoriesRender /> */}
      {/* <Routes>
        <Route path="/categories/all" element={<Categories />} />
      </Routes> */}
      <Contact />
    </>
  );
}


export default App;

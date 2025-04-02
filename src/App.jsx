
import './App.css'
import React  from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';



const App = () => {


 


  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/> } />
      <Route path="/products" element={<ProductsPage/> } />
      <Route path="/productDetail" element={<ProductDetailPage/> } />
      </Routes>
    </Router>
  );
};



export default App

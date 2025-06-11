
import './App.css'
import React  from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { CheckOutPage } from './pages/CheckOutPage';



const App = () => {


 


  return (
    <div className="page-container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/> } />
          <Route path="/products" element={<ProductsPage/> } />
          <Route path="/productDetail" element={<ProductDetailPage/> } />
          <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/checkout" element={<CheckOutPage/>}/>
        
        </Routes>
      </Router>
    </div>
  );
};



export default App

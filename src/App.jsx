import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage.jsx';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/product/:id" element={<ProductViewPage />} />
      <Route path="/categories" element={<ProductListingPage />} />
      <Route path="/my-orders" element={<ProductListingPage />} />
    </Routes>
  );
}

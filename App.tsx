import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import SingleProductPage from './pages/SingleProductPage';
import BundlePage from './pages/BundlePage';
import GiftPage from './pages/GiftPage';
import ProductsPage from './pages/ProductsPage';
import ChatButton from './components/ChatButton';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="product/:id" element={<SingleProductPage />} />
          <Route path="bundle/:id" element={<BundlePage />} />
          <Route path="gift/:id" element={<GiftPage />} />

          {/* Catch-all aliases */}
          <Route path="bundles" element={<BundlePage />} />
          <Route path="gifts" element={<GiftPage />} />
          <Route path="shop-all" element={<ProductsPage />} />
        </Route>
      </Routes>
      <ChatButton />
    </>
  );
}
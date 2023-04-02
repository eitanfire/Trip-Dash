import React from "react";
import HomePage from '../src/pages/HomePage';
import Header from './components/Header';
import OrderPage from "./pages/OrderPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="order" element={<OrderPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

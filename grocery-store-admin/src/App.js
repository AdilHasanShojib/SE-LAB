import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AdminPage from './Components/AdminPage';
import FruitsPage from './Components/FruitsPage';
import VegetablesPage from './Components/VegetablesPage';
import ProductList from './Components/ProductList';
import ProductModal from './Components/ProductModal';
import './Components/CSS/style.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Carrot', price: 1.99, image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104152640/carrot-icon.png' },
    { id: 2, name: 'Tomato', price: 1.49, image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104153932/tomato-icon.png' },
    { id: 3, name: 'Pumpkin', price: 2.99, image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104153754/pumpkin-icon.png' },
    { id: 4, name: 'Brinjal', price: 1.79, image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104153652/eggplant-icon.png' },
    { id: 5, name: 'Apple', price: 2.49, image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104153254/fresh-apple-icon.png' },
    { id: 6, name: 'Banana', price: 0.99, image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104153407/bananas-icon.png' },
    { id: 7, name: 'Orange', price: 0.79, image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240104153523/orange-icon.png' }
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (product) => {
    if (product.id) {
      setProducts(products.map(p => (p.id === product.id ? product : p)));
    } else {
      product.id = products.length + 1;
      setProducts([...products, product]);
    }
    setIsModalOpen(false);
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const result = products.filter(product => product.name.toLowerCase().includes(term));
    if (result.length === 0) {
      alert('Product is not found');
    }
    setFilteredProducts(result);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<ProductList products={filteredProducts} onEditProduct={handleEditProduct} />} />
          <Route path="/admin" element={<AdminPage products={products} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} onAddProduct={handleAddProduct} />} />
          <Route path="/fruits" element={<FruitsPage products={filteredProducts.filter(product => ['Apple', 'Banana', 'Orange'].includes(product.name))} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} />} />
          <Route path="/vegetables" element={<VegetablesPage products={filteredProducts.filter(product => ['Carrot', 'Tomato', 'Pumpkin', 'Brinjal'].includes(product.name))} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} />} />
        </Routes>
        <ProductModal isOpen={isModalOpen} product={selectedProduct} onSave={handleSaveProduct} onClose={handleCloseModal} />
      </div>
    </Router>
  );
}

export default App;

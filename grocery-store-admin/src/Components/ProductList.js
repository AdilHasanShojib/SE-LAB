import React from 'react';
import Product from './Product';
import './CSS/style.css';

const ProductList = ({ products, onEditProduct }) => {
  return (
    <div className="category">
      {products.map(product => (
        <Product key={product.id} product={product} onEdit={onEditProduct} />
      ))}
    </div>
  );
};

export default ProductList;
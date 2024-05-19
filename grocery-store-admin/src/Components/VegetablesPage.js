import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/style.css';

function VegetablesPage({ products, onEditProduct, onDeleteProduct }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="category">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <div className="product-buttons">
            <button>Add to Cart</button>
            <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default VegetablesPage;


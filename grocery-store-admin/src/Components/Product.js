import React from 'react';
import './CSS/style.css';

const Product = ({ product, onEdit, onDelete, isAdmin }) => {
  return (
    <div className="product">
      <div className={`image-placeholder image-placeholder${product.id}`}>
        <img src={product.image} alt="grocery" />
      </div>
      <h3>{product.name}</h3>
      <p className="price">${product.price}/1kg</p>
      {isAdmin ? (
        <div className="product-buttons">
          <button className="green-button" onClick={() => onEdit(product)}>Edit</button>
          <button className="red-button" onClick={() => onDelete(product.id)}>Delete</button>
        </div>
      ) : (
        <>
          <div className="qyt">
            <label htmlFor={`quantity_${product.id}`}>Quantity:</label>
            <input type="number" id={`quantity_${product.id}`} defaultValue="1" />
          </div>
          <div className="product-buttons">
            <button>Add to Cart</button>
            <button>Buy Now</button>
            <button onClick={() => onEdit(product)}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;


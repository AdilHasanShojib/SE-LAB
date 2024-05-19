import React, { useState, useEffect } from 'react';
import './CSS/style.css';

function ProductModal({ isOpen, product, onSave, onClose }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
    } else {
      setName('');
      setPrice('');
      setImage('');
    }
  }, [product]);

  const handleSave = () => {
    onSave({ ...product, name, price: parseFloat(price), image });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Back</button>
      </div>
    </div>
  );
}

export default ProductModal;

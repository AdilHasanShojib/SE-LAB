import React, { useState } from 'react';
import Modal from 'react-modal';
import './CSS/style.css';
import Product from './Product';

Modal.setAppElement('#root');

function AdminPage({ products, onAddProduct, onEditProduct, onDeleteProduct }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setName('');
    setPrice('');
    setImage('');
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price.toString());
    setImage(product.image);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingProduct(null);
    setName('');
    setPrice('');
    setImage('');
  };

  const handleAdd = () => {
    if (name && price && image) {
      const newProduct = {
        id: products.length + 1,
        name,
        price: parseFloat(price),
        image,
      };
      onAddProduct(newProduct);
      closeAddModal();
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleEdit = () => {
    if (name && price && image) {
      onEditProduct({
        ...editingProduct,
        name,
        price: parseFloat(price),
        image,
      });
      closeEditModal();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <button className="green-button-b1" onClick={openAddModal}>
        Add New Product
      </button>
      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={closeAddModal}
        contentLabel="Add Product"
        className="modal"
        overlayClassName="overlay"
      >
        <h3>Add Product</h3>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <button className="green-button" onClick={handleAdd}>Save</button>
        <button className="green-button" onClick={closeAddModal}>Cancel</button>
      </Modal>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id}>
            <Product
              product={product}
              onEdit={openEditModal}
              onDelete={() => onDeleteProduct(product.id)}
              isAdmin={true}
            />
          </div>
        ))}
      </div>
      {editingProduct && (
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          contentLabel="Edit Product"
          className="modal"
          overlayClassName="overlay"
        >
          <h3>Edit Product</h3>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
          <button className="green-button" onClick={handleEdit}>Save</button>
          <button className="green-button" onClick={closeEditModal}>Cancel</button>
        </Modal>
      )}
    </div>
  );
}

export default AdminPage;

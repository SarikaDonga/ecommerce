import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (id) {
      const productToEdit = products.find((p) => p.id === parseInt(id));
      if (productToEdit) setFormData(productToEdit);
    }
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Update Product
      setProducts((prev) =>
        prev.map((product) => (product.id === parseInt(id) ? formData : product))
      );
    } else {
      // Add Product
      setProducts((prev) => [
        ...prev,
        { ...formData, id: prev.length + 1 },
      ]);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? 'Edit Product' : 'Add Product'}</h1>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      ></textarea>
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;

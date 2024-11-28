import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, setProducts }) => {
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <Link to={`/product/${product.id}`}>View</Link> |{' '}
          <Link to={`/edit/${product.id}`}>Edit</Link> |{' '}
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

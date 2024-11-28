import React from 'react'
import ProductCard from '../Pages/ProductCard'
import productData from '../assets/ProductData'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Product = ({ products }) => {
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMinPriceChange = (e) => setMinPrice(Number(e.target.value));
  const handleMaxPriceChange = (e) => setMaxPrice(Number(e.target.value));
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = productData.filter((product) =>
      (selectedCategory === 'All' || product.cat === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery) &&
      product.price >= minPrice &&
      product.price <= maxPrice
  );

  return (

    <>
      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        name='cat'
        onChange={handleCategoryChange}
        style={{ padding: '5px', flex: '1' }}
      >
        <option value="All">All Categories</option>
        <option value="Kids">Kids</option>
        <option value="Women">Women</option>
        <option value="Men">Men</option>
      </select>
      <div style={{ flex: '2' }}>
          <label>
            Min Price: $
            <input
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              style={{ padding: '5px', width: '80px', marginRight: '8px' }}
            />
          </label>
          <label>
            Max Price: $
            <input
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              style={{ padding: '5px', width: '80px' }}
            />
          </label>
        </div>



      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found matching your criteria.</p>
        )}
      </div>



    </>


  )
}

export default Product
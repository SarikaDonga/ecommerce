import React from 'react'

import { useParams } from "react-router-dom";
import productData from '../assets/ProductData';
const SingleProductPage = () => {
    const { id } = useParams();
    const handleAddToCart = (product) => {
        // Retrieve the existing cart from localStorage or initialize an empty array
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        // const productIndex = existingCart.findIndex((item) => item.id === product.id);

        // if (productIndex > -1) {
        //     // If product exists, increment the quantity
        //     existingCart[productIndex].quantity += 1;
        //   } else {
        //     // If product does not exist, add with default quantity
        //     existingCart.push({ ...product, quantity: 1 });
        //   }
        // Add the selected product to the cart
        const updatedCart = [...existingCart, product];

        // Store the updated cart in localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        alert(`${product.name} has been added to the cart!`);
    };


    const product = productData.find((item) => item.id === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>;
    }
    return (
        <div>
            <div style={{ padding: '20px' }}>
                <h1>{product.name}</h1>
                <img src={product.image} alt={product.name} style={{ width: '300px' }} />
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Stock:</strong> {product.stock}</p>
                <p><strong>Description:</strong> {product.description}</p>
                <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                </button>            </div>
        </div>
    )
}

export default SingleProductPage
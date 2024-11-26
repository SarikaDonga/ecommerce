import React from 'react'

import { useParams } from "react-router-dom";
import productData from '../assets/ProductData';
const SingleProductPage = () => {
    const { id } = useParams();


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
            </div>    </div>
    )
}

export default SingleProductPage
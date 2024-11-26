import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {

    return (
        <div className='card' style={{ width: '18rem' }}>
            <Link to={`/product/${product.id}`} >
                <h2>{product.name}</h2>
                <img src={product.image} alt="" />
            </Link>

            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <p>{product.description}</p>

        </div>
    )
}

export default ProductCard
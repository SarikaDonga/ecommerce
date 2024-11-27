import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {

    return (
        <div className='card' style={{ width: '18rem',height:'500px' }}>
            <Link to={`/product/${product.id}`} className='text-decoration-none text-dark text-center'>
                <h2>{product.name}</h2>
                <img className='card-img p-2' src={product.image} alt="" style={{height:'200px'}} />
            </Link>

            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.stock}</p>
            <p>{product.size.map((size, index) => (
                <span key={index} style={{ margin: "0 4px" }}>
                    {size}
                </span>
            ))}</p>
            <p>{product.description}</p>

        </div>
    )
}

export default ProductCard
import React from 'react'
import productData from '../assets/ProductData'
import ProductCard from './ProductCard'


const Home = () => {

  
  return (
    <div className='d-flex'>

      {
        productData.map((product,index)=>(
          <div key={product.id}>
            <ProductCard product={product}/>

          </div>
        ))
      }



    </div>
  )
}

export default Home
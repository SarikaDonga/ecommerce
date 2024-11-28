import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom';
const Home = () => {


  return (
   
      <div>
      <Link to="/add">Add Product</Link>
      <Product/> 

    </div>
  )
}

export default Home
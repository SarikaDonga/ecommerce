import './App.css';

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Setting from './Pages/Setting'
import Dashbord from './Pages/Dashbord';
import Navbar from './Components/Navbar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile1 from './Pages/Profile1';
import SingleProductPage from './Pages/SingleProductPage';
import Product from './Pages/Product';
import ViewCart from './Pages/ViewCart';
import AddProductPage from './Pages/AddProductPage';
import { useState } from 'react';
function App() {


  return (
    <>
      <Router>
        <Navbar  />

        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/products" element={<Product/>} />
          <Route path="/viewcart" element={<ViewCart  />} />
          <Route path="/add-product" element={<AddProductPage />} />

         
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile1' element={<Profile1 />}></Route>
          <Route path='/dashbord' element={<Dashbord />}>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='setting' element={<Setting />}></Route>
          </Route>



        </Routes>



      </Router>


    </>
  );
}

export default App;

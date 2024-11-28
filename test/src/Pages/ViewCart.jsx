import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
const ViewCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Retrieve the cart from localStorage when the component loads
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);

    }, []);

    // Save updated cart to localStorage whenever the cart changes
    const updateLocalStorage = (updatedCart) => {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    // Increment quantity
    const incrementQuantity = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
        updateLocalStorage(updatedCart);
    };

    // Decrement quantity
    const decrementQuantity = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            updateLocalStorage(updatedCart);
        } else {

            updatedCart.splice(index, 1);
            updateLocalStorage(updatedCart);
        }
    };

    // single product wise
    const calculateProductTotal = (item) => {
        const total= (item.quantity || 1) * item.price;
        return total.toFixed(2)
        
    };
    // all Calculate  total
    const calculateGrandTotal = () => {
        const gtotal= cart.reduce((total, item) => total + (item.quantity || 1) * item.price, 0);
        return gtotal.toFixed(2)
    };

    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {cart.length > 0 ? (
                cart.map((item, index) => (
                    <div key={index}>

                        {/* <p>{item.name}</p> */}
                        <ProductCard key={index} product={item} />

                        Quantity: {item.quantity || 1}
                        <br />
                       Price {calculateProductTotal(item)}
                        <div>
                            <button onClick={() => decrementQuantity(index)}>-</button>
                            <button onClick={() => incrementQuantity(index)}>+</button>
                        </div>

                    </div>

                ))
            ) : (
                <p>No products found matching your criteria.</p>
            )}
            <h2>Total: ${calculateGrandTotal()}</h2>

        </div>)
}

export default ViewCart
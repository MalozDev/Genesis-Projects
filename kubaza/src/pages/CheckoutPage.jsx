import React, { useState, useEffect } from "react";
import "./CheckoutPage.css";
import NavbarHome from "../components/Navbar/NavbarHome";
import Footer from "../components/Footer/Footer"; 

const Checkout = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    return total + parseFloat(item.price.replace("ZMW", "").replace(",", "").trim());
  }, 0);

  return (
    <div className="checkout-container">
      <NavbarHome /> {/* Navbar at the top */}
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="selected-items">
          <ul className="checkout-list">
            {cart.map((item) => (
              <li key={item.id} className="checkout-item">
                <img src={item.src} alt={item.alt} className="checkout-image" />
                <div className="checkout-details">
                  <p className="checkout-title">{item.title}</p>
                  <p className="checkout-price">{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ZMW {totalPrice.toLocaleString()}</h3>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default Checkout;

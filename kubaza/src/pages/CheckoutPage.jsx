import React, { useState, useEffect } from "react";
import "./CheckoutPage.css";
import NavbarHome from "../components/Navbar/NavbarHome";
import Footer from "../components/Footer/Footer";

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + parseFloat(item.price.replace("ZMW", "").replace(",", "").trim());
  }, 0);

  const handlePayment = async () => {
    const phoneNumber = prompt("Enter Airtel Money number:");
    if (!phoneNumber) return alert("Payment canceled");

    console.log("Phone Number:", phoneNumber);
    console.log("Total Price:", totalPrice);

    try {
      const response = await fetch("http://localhost:5000/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice, phoneNumber }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please check the console for details.");
    }
  };

  return (
    <div className="checkout-container">
      <NavbarHome />
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
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ZMW {totalPrice.toLocaleString()}</h3>
          <button className="checkout-button" onClick={handlePayment}>
            Proceed to Checkout
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
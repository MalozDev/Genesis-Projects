import React, { useState, useEffect, useRef } from "react";
import "./SignUp.css";
import google from "../../../assets/google-icon.png";
import Modal from "../../Modal/Modal";
import Login from "../Login/Login";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../../firebase-config";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const modalRef = useRef();
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Initialize Firebase Authentication
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Close modal if click happens outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false); // Close modal if clicked outside
      }
    };
    // Add event listener for click outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User signed up:", userCredential.user);

      // You can also update the user's profile with the name (optional)
      await userCredential.user.updateProfile({ displayName: formData.name });
      alert("Signup successful! Welcome " + formData.name);

      // Redirect to the main page after sign up
      navigate("/home");
    } catch (error) {
      console.error("Signup error:", error.message);
      alert("Signup failed: " + error.message);
    }
  };

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Signup Successful:", result.user);
      alert("Welcome " + result.user.displayName);

      // Redirect to the main page after Google sign up
      navigate("/login");
    } catch (error) {
      console.error("Google Signup Error:", error.message);
      alert("Google Signup Failed: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      {/* Left Side */}
      <div className="left-side">
        <h2>Welcome to Our Platform!</h2>
        <p>Join us and unlock endless possibilities.</p>
      </div>

      {/* Right Side */}
      <div className="right-side">
        <div className="signup-box">
          <h1>Create Account</h1>

          {/* Google Signup Button */}
          <button className="google-btn" onClick={handleGoogleSignUp}>
            <img src={google} alt="Google Icon" />
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="divider">
            <span>or</span>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button class="toggle-btn" type="button" onClick={togglePassword}>
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            <button type="submit" className="register-btn">
              Sign Up
            </button>
          </form>

          <p className="login-text">
            Already have an account?{" "}
            <a href="#" onClick={openModal}>
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Render Modal if it's open */}
      {isModalOpen && (
        <Modal closeModal={closeModal} ref={modalRef}>
          {/* Render the LoginForm Component inside the modal */}
          <Login closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default SignUp;

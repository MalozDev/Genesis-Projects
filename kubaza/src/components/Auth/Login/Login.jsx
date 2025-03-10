import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import google from "../../../assets/google-icon.png";
import Modal from "../../Modal/Modal";
import SignUp from "../Signup/Signup";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app } from "../../../firebase-config"; // Adjust the path if needed
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    document.addEventListener("mousedown", handleClickOutside);

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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User signed in:", userCredential.user);
      alert("Login successful! Welcome back.");
      navigate("/home"); // Redirect to the main page after login
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Login Successful:", result.user);
      alert("Welcome " + result.user.displayName);
      navigate("/home"); // Redirect to the main page after Google login
    } catch (error) {
      console.error("Google Login Error:", error.message);
      alert("Google Login Failed: " + error.message);
    }
  };

  const handleForgotPassword = async () => {
    const email = prompt("Please enter your email address for password reset:");
    if (email) {
      try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent!");
      } catch (error) {
        alert("Error: " + error.message);
      }
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

  return (
    <div className="login-container">
      <div className="left-side">
        <h2>Welcome Back!</h2>
        <p>Log in to continue exploring amazing features.</p>
      </div>
      <div className="right-side">
        <div className="login-box">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="password-toggle" onClick={togglePassword}>
                {passwordVisible ? "Hide" : "Show"}
              </span>
            </div>
            <a
              href="#"
              className="forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </a>
            <button type="submit" className="sign-in-btn">
              Sign In
            </button>
          </form>
          <p className="signup-text">
            Don't have an account?{" "}
            <a href="#" onClick={openModal}>
              Sign up now
            </a>
          </p>
          <p className="or-text">Or login with</p>
          <button className="google-btn" onClick={handleGoogleSignIn}>
            <img src={google} alt="Google Icon" /> Sign in with Google
          </button>
        </div>
      </div>

      {/* Render Modal if it's open */}
      {isModalOpen && (
        <Modal onClose={closeModal} ref={modalRef}>
          <SignUp closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Login;

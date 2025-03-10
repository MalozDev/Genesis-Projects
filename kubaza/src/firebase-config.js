import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCiPqPMMEwqIODrPNRylYEoK4I9k3BfYYM",
  authDomain: "kubaza-market.firebaseapp.com",
  projectId: "kubaza-market",
  storageBucket: "kubaza-market.firebasestorage.app",
  messagingSenderId: "175264200751",
  appId: "1:175264200751:web:3655ef5770fd11a88faeda",
  measurementId: "G-30GH2PZT3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

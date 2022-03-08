import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ErrorPage from "./booking/ErrorPage";
import TopNav from "./components/TopNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <TopNav />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

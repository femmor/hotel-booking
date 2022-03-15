import React, { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../actions/auth";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "fegomson@gmail.com",
    password: "Test12345",
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    console.log("send login data", credentials);
    try {
      const res = await login(credentials);
      if (res.data) {
        console.log("Save user data in redux and local storage and redirect");
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        toast.error(error.response.data, { theme: "colored" });
      }
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1 className="text-white">Login</h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <LoginForm
              credentials={credentials}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

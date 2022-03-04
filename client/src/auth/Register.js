import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { register } from "../actions/auth";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await register(credentials);
      console.log("Register user", res); // res.data
    } catch (error) {
      console.log(error.message);
    }

    clearForm();
  };

  const clearForm = () => {
    setCredentials({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1 className="text-white">Register</h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <RegisterForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              credentials={credentials}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

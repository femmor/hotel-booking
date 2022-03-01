import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(credentials);

    clearForm();
  };

  const clearForm = () => {
    setCredentials({
      name: "",
      email: "",
      password: "",
      password2: "",
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

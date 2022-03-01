import React, { useState } from "react";

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

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          name="name"
          value={credentials.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="name">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="name">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="name">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm password"
          name="password2"
          value={credentials.password2}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary w-100 mb-3" type="submit">
        Submit
      </button>
    </form>
  );

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1 className="text-white">Register</h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mx-auto">{registerForm()}</div>
        </div>
      </div>
    </>
  );
};

export default Register;

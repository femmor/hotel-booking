const RegisterForm = ({ handleSubmit, credentials, handleChange }) => {
  const { name, email, password, password2 } = credentials;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          name="name"
          value={name}
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
          value={email}
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
          value={password}
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
          value={password2}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary w-100 mb-3" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
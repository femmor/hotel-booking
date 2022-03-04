const LoginForm = ({ handleSubmit, credentials, handleChange }) => {
  const { email, password } = credentials;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
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
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn btn-primary w-100 mb-3"
        type="submit"
        disabled={!email || !password}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;

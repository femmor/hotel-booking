import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const TopNav = () => {
  const { auth } = useSelector(state => ({ ...state }));
  const dispatch = useDispatch();
  const history = useHistory();

  // Logout user
  const handleLogout = () => {
    // empty user from redux state
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.setItem("auth", null);
    history.push("/login");
  };

  return (
    <div className="nav bg-light d-flex justify-content-between">
      <>
        <Link className="nav-link" to="/">
          Home
        </Link>
        {auth !== null && (
          <a className="nav-link" onClick={handleLogout}>
            Logout
          </a>
        )}

        {auth === null && (
          <>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </>
        )}
      </>
    </div>
  );
};

export default TopNav;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// Styles
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ErrorPage from "./booking/ErrorPage";
import TopNav from "./components/TopNav";
import Dashboard from "./user/Dashboard";

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

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;

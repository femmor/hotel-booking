import React from "react";
import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <ConnectNav />
      </div>

      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your listings</h2>
            <p>Show all bookings and a button to browse hotels.</p>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-primary" to="/hotels/create">
              <div className="d-flex align-items-center gap-2">
                <PlusOutlined /> Add Hotel
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDashboard;

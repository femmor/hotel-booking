import React from "react";
import DashboardNav from "../components/DashboardNav";

const SellerDashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1 className="text-white">Seller Dashboard</h1>
      </div>

      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container">
        <p>Show all hotels user has posted and button to add new ones.</p>
      </div>
    </>
  );
};

export default SellerDashboard;

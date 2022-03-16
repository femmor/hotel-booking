import React from "react";
import { useSelector } from "react-redux";

const NewHotel = () => {
  const { auth } = useSelector(state => ({ ...state }));

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1 className="text-white">Create Listing</h1>
      </div>
      <div className="container-fluid p-4">
        <h2>Your bookings</h2>
        <p>Show all bookings and a button to browse hotels.</p>
      </div>
    </>
  );
};

export default NewHotel;

import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen tracking-wider">
      <div className="text-center py-2 shadow-lg rounded-lg p-10">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to Charter Account Data Management
        </h1>
        <p className="mt-4 text-lg text-gray-700 font-semibold">
          Easily manage your charter accountant data with features like search,
          CRUD operations, and more.
        </p>
        <div className="my-10">
          <button
            onClick={() => navigate("/accountants")}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
          >
            Go To Accountants
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

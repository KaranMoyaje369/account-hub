import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LiaServicestack } from "react-icons/lia";
import { FaHandPointRight } from "react-icons/fa";

const AccountantDetails = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const [accountant, setAccountant] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccountant = async () => {
      try {
        const response = await axios.get(
          "https://karanmoyaje369.github.io/account-data-api/db.json"
        );
        const accountantData = response.data.accountants;
        const selectedAccountant = accountantData.find(
          (accountant) => accountant.id.toString() === parseInt(id)
        );
        if (selectedAccountant) {
          setAccountant(selectedAccountant);
        } else {
          setAccountant(null);
        }
      } catch (error) {
        console.error("Error fetching accountant details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccountant();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!accountant) {
    return <p className="text-center">Accountant not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 tracking-wider mt-[100px]">
      <div className="max-w-4xl mx-auto bg-white space-y-3 shadow-lg rounded-lg p-6">
        <div className="flex flex-col gap-4 p-2">
          <img
            src={accountant.image}
            alt="Accountant"
            className="h-[150px] w-[150px] rounded-full mx-auto shadow-lg shadow-blue-500"
          />
          <h1 className="text-3xl font-bold text-blue-600 text-center">
            {accountant.name}
          </h1>
          <p className="text-gray-600">
            <strong className="mr-2">ID:</strong> {accountant.id}
          </p>
          <p className="text-gray-600">
            <strong className="mr-2">Introduction:</strong> {accountant.intro}
          </p>

          <p className="text-gray-600">
            <strong className="mr-2">Price:</strong> {accountant.price}
          </p>

          <p className="text-gray-600">
            <strong className="mr-2">Rating:</strong> {accountant.rating}⭐
          </p>

          <p className="text-gray-600">
            <strong className="mr-2">Happy Customers:</strong>{" "}
            {accountant.reviewCount}
          </p>

          <p className="text-gray-600">
            <strong className="mr-2">Tasks:</strong> {accountant.taskComplexity}
          </p>
          <p className="text-gray-600">
            <strong className="mr-2">Time:</strong> {accountant.deliveryTime}
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-4 p-2">
          <h2 className="text-2xl font-bold text-blue-600 text-center">
            About Me...
          </h2>
          <p className="text-blue-500 text-lg text-center font-bold italic">
            {accountant.about.description}
          </p>
          <p className="text-gray-600">
            <strong className="mr-2">Location:</strong> {accountant.about.from}
          </p>
          <p className="text-gray-600">
            <strong className="mr-2">Started Since:</strong>{" "}
            {accountant.about.partnerSince}
          </p>
          <p className="text-gray-600">
            <strong className="mr-2">Response Time:</strong>{" "}
            {accountant.about.averageResponseTime}
          </p>
          <div className="text-gray-600">
            <strong className="mr-2">Services:</strong>{" "}
            {accountant.about.services.map((item, id) => (
              <div key={id} className="flex items-center gap-4 mt-2">
                <LiaServicestack className="font-bold text-2xl text-blue-600" />
                <li key={id} className="list-none">
                  {item}
                </li>
              </div>
            ))}
          </div>
          <div className="text-gray-600">
            <strong className="mr-2">Benefits:</strong>
            {accountant.about.benefits.map((item, id) => (
              <div key={id} className="flex items-center gap-4 mt-2">
                <FaHandPointRight className="font-bold text-2xl text-blue-600" />
                <li key={id} className="list-none">
                  {item}
                </li>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
      {/* Go Back Button */}
      <div className="my-10 flex justify-center">
        <button
          onClick={() => navigate("/accountants")}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Go To Accountants
        </button>
      </div>
    </div>
  );
};

export default AccountantDetails;

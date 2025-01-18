import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AccountantsList = () => {
  const [accountants, setAccountants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from db.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://karanmoyaje369.github.io/account-data-api/db.json"
        );
        console.log(response.data.accountants); // Log data to verify structure
        setAccountants(response.data.accountants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Filter accountants by search term (name or ID)
  const filteredAccountants = accountants.filter(
    (accountant) =>
      accountant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accountant.id.toString().includes(searchTerm)
  );

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Accountants List
      </h1>

      {/* Search Bar */}
      <div className="max-w-lg mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by using name or ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-full shadow-md shadow-blue-400 focus:ring-blue-500 focus:border-blue-500 outline-none "
        />
      </div>

      {/* Accountants List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 tracking-wider">
        {filteredAccountants.length > 0 ? (
          filteredAccountants.map((accountant) => (
            <div
              key={accountant.id}
              className="border border-gray-50 shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-around items-center">
                  <h2 className="text-2xl font-bold text-blue-600">
                    {accountant.name}
                  </h2>
                  <img
                    src={accountant.image}
                    alt="Accountant"
                    className="h-[100px] w-[100px] rounded-full"
                  />
                </div>

                <p className="text-white font-bold">
                  <span className="mr-1">ID</span>: {accountant.id}
                </p>
                <p className="text-white font-semibold">{accountant.intro}</p>
                <p className="text-white font-semibold">
                  <span className="mr-1 font-bold">Rating</span>:{" "}
                  {accountant.rating}⭐
                </p>
                <p className="text-white font-semibold">
                  <span className="mr-1 font-bold">Price</span>:{" "}
                  {accountant.price}
                </p>
              </div>

              <div className="flex justify-start items-center mt-5">
                <Link
                  to={`/accountants/${accountant.id}`} // Ensure dynamic path is correctly used
                  className="px-3 py-2 font-semibold rounded-full bg-blue-500 hover:bg-blue-700 text-white"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-2xl text-gray-600 col-span-full">
            No accountants found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AccountantsList;

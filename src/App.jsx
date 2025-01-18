import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AccountantsList from "./pages/AccountantsList";
import AddAccountant from "./pages/AddAccountant"; // New page for adding accountant
import AccountantDetails from "./components/AccountantsDetail"; // Fixed import

import CharterDetails from "./components/CharterDetails";

const App = () => {
  return (
    <Router basename="/account-hub">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accountants" element={<AccountantsList />} />
        <Route path="/accountants/:id" element={<AccountantDetails />} />
        {/* <Route path="/accountants/:id" element={<CharterDetails />} /> */}
        {/* Fixed */}
        <Route path="/add-accountant" element={<AddAccountant />} />
      </Routes>
    </Router>
  );
};

export default App;

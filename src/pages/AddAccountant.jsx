import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Import the CSS file

const AddAccountant = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newAccountant = {
      name: data.name,
      email: data.email,
    };

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/accountants", newAccountant);
      setLoading(false);
      navigate("/accountants");
    } catch (error) {
      setLoading(false);
      alert("Error adding accountant: " + error.message);
    }
  };

  return (
    <div className="add-accountant-container relative mt-[100px]">
      <h2>Add Accountant</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="add-accountant-form">
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Accountant"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAccountant;

import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup", formData);
      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl shadow-lg w-[90%] max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-gray-800 rounded-lg"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

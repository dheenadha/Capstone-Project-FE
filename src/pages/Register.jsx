import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import logo from "../assets/logo.jpg";
import logo1 from "../assets/login.png";
import user from "../assets/user.png";

export default function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.username) {
        error.username = "Please enter the username";
      }

      if (!values.email) {
        error.email = "Please enter the email";
      }

      if (!values.password || values.password.length < 3) {
        error.password = "Please enter a valid password";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://capstone-project-be-7ppj.onrender.com/register",
          values
        );
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <img src={logo} alt="Logo" className="w-20 h-20 mb-2" />
        <h1 className="text-3xl font-bold text-gray-900">TRAVEL PLAN</h1>
        <p className="text-lg text-gray-800 text-center">
          Traveling opens the door to creating{" "}
          <span className="text-orange-500 font-semibold">memories</span>
        </p>
      </div>

      {/* Register Container */}
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full max-w-5xl mx-auto shadow-md"
      >
        {/* Left Image */}
        <div className="w-3/5 flex items-center justify-center bg-white">
          <img
            src={logo1}
            alt="Register Illustration"
            className="w-3/4 object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="w-2/5 bg-yellow-500 relative p-12 flex flex-col justify-center">
          {/* User Icon */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center">
            <img src={user} alt="User Icon" className="w-16 h-16" />
          </div>

          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Register
          </h2>

          {/* Username */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            {formik.errors.username && (
              <span className="text-red-700 text-sm">
                {formik.errors.username}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            {formik.errors.email && (
              <span className="text-red-700 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            {formik.errors.password && (
              <span className="text-red-700 text-sm">
                {formik.errors.password}
              </span>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Register
          </button>

          {/* Footer */}
          <p className="text-white text-center mt-6">
            Already have an account?
            <Link to="/" className="text-black font-semibold ml-2">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

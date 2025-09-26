import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import logo from "../assets/logo.jpg";
import logo1 from "../assets/login.png";
import user from "../assets/user.png";

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.email) {
        error.email = "Please Enter the email";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        const resp = await axios.post(
          "https://capstone-project-be-7ppj.onrender.com/login",
          values
        );
        if (resp.status === 200) {
          window.localStorage.setItem("mytoken", resp.data.message);
          navigate("/home");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });

  return (
    <>
      {/* Top Header */}
      <div className="flex flex-col items-center text-center my-6">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>
        <h1 className="text-3xl font-bold mt-2">TRAVEL PLAN</h1>
        <h1 className="text-xl font-medium">
          Traveling opens the door to creating{" "}
          <span className="text-orange-500 font-semibold">memories</span>
        </h1>
      </div>

      {/* Login Section */}
      <div className="max-w-5xl mx-auto mt-24 flex shadow-md">
        {/* Left image */}
        <div className="w-3/5 text-center">
          <img src={logo1} alt="login" className="w-3/4 mx-auto object-contain" />
        </div>

        {/* Right form */}
        <div className="w-2/5 bg-yellow-500 relative p-12">
          {/* user icon */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20">
            <img src={user} alt="user" className="w-full h-full" />
          </div>

          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Login
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="p-2">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full px-4 py-2 rounded-md border-none text-gray-700 focus:outline-none"
              />
            </div>

            <div className="p-2">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full px-4 py-2 rounded-md border-none text-gray-700 focus:outline-none"
              />
            </div>

            <input
              type="submit"
              value="Login"
              className="w-full py-2 mt-2 bg-black text-white rounded-md cursor-pointer hover:bg-gray-800 transition"
            />
            <p className="text-white text-center mt-6">
              Don't have an account?
              <Link to="/register" className="text-black font-semibold ml-2">
                Create
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

import React from 'react'
import {  Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import { useFormik } from "formik";
import axios from "axios";

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
        error.password = "Please enter the valid password";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("https://capstone-project-be-1.onrender.com/register", values);
        navigate('/home');
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
        {/* ============== logo ============== */}
        <div className="logo  d-flex align-items-center justify-content-between">
                        <img src="src/assets/logo.jpg" alt="" />
                        </div>
        <div className="hero__subtitle  align-items-center">
                                </div>
                                <h1>TRAVEL PLAN</h1>
                                <h1>
                                    Traveling opens the door to creating
                                    <span className="highlight"> memories</span>
                                </h1>
       <form onSubmit={formik.handleSubmit}>
            <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src="src/assets/login.png" alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                <img src="src/assets/user.png" alt="" />
                </div>
                <h2>Register</h2>
                
                  <div>
                  <div className='p-2'>
                    <input 
                      type="text"
                      placeholder="Username"
                      name="username"
                      required
                      id="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                    />  </div> <span>{formik.errors.username}</span>
                  <div className='p-2'>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    /></div>
                   <span>{formik.errors.password}</span>
                    <div className='p-2'><input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    /> <span>{formik.errors.password}</span>
                  <div className="col-lg-12 mt-2"></div>
          
          <input
            type="submit"
            value={"Register"}
            className="btn btn-secondary "
          /></div>
        </div>
                 
                 
                <p>
                  Already have an account? <Link to="/">Login</Link>
                </p>
              </div>
            </div>
         
            </form>
      </>
  )
}

import React from 'react'
import { Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import axios from "axios";
import { useFormik } from "formik";
import logo from './assets/logo.jpg'
import logo1 from './assets/login.png'
import user from './assets/user.png'

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
        const resp = await axios.post("http://localhost:3000/login", values);
        if (resp.status == 200) {
          window.localStorage.setItem("mytoken",resp.data.message)
          navigate("/home");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });
  return (
<>
        <Row>
        <div className="nav__wrapper align-items-center justify-content-between ">
                        {/* ============== logo ============== */}
                        <div className="logo  d-flex align-items-center justify-content-between">
                        <img src={logo} alt="" />
                        </div>
        <div className="hero__subtitle  align-items-center">
                                </div>
                                <h1>TRAVEL PLAN</h1>
                                <h1>
                                    Traveling opens the door to creating
                                    <span className="highlight"> memories</span>
                                </h1></div>
          <Col lg="8" className="m-auto">
          
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
              <img src={logo1} alt="" />
              </div>
              
              <div className="login__form">
                <div className="user">
                <img src={user} alt="" />
                </div>
                <h2>Login</h2>
             
                <form onSubmit={formik.handleSubmit}>
                <div className='p-2'>
                    <input
                      type="text"
                        placeholder="Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className="form-control"
                    ></input></div>
                   <div className='p-2'>
                    <input
                      placeholder="password"
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      className="form-control"
                    ></input></div>
                   <input type="submit" value={"Login"} className="btn secondary__btn auth__btn" />
                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>  </form>
              </div>
            </div>
            
          </Col>
        </Row>
      </>
  )
}

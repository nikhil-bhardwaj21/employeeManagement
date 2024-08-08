import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "./Login";
import axios from "axios";
import { Formik, FormikProvider, useFormik } from "formik";
import { signUpSchema } from "../schemas/signup";

const url = "https://localhost:7105/api/signUp";

function Signup() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    //handling the submission form
    onSubmit: async (value) => {
      console.log("value", value);
      try {
        const response = await axios.post(url, value, {
          headers: { "Content-Type": "application/json" },
        });
        console.log("Response: ", response.data);
        setSubmitted(true);
        //setError(false)
        
      } catch (error) {
        console.log(error);
        setError(true);
      }

      // else {
      //   console.log({ name, email, password });
      //   const response = await axios.post(
      //     url,
      //     { name, email, password },
      //     { headers: { "Content-Type": "application/json" } }
      //   );

      // setSubmitted(true);
      // setError(false);
    },
  });
  useEffect(() => {});

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  //show success Message
  const successMessage = () => {
    return (
      <div
        className="success text-green-500 font-bold text-lg mt-3 mb-3"
        style={{ display: submitted ? "" : "none" }}
      >
        <p>
          User successfully registered!
          <Link to={Login} className="hover:underline">
            Please Login
          </Link>
        </p>
      </div>
    );
  };

  //show error message
  const errorMessage = () => {
    return (
      <div
        className="error text-red-500 font-bold text-lg mt-2 mb-3 "
        style={{ display: error ? "" : "none" }}
      >
        Please enter all the fields !!
      </div>
    );
  };

  return (
    <FormikProvider value={formik}>
      <div
        className="flex flex-auto items-center justify-center h-screen bg-gray-100"
        style={{
          backgroundImage:
            'url("https://akriviahcm.com/blog/wp-content/uploads/2024/01/features-of-employee-management-system.png")',
        }}
      >
        <div className=" flex flex-col items-center">
          <div className=" flex flex-row font-sans flex-wrap items-center text-center mx-5 mb-16">
            <p className="font-bold text-5xl text-white">
              Employee Management System
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-2xl mx-2 w-96  pb-3">
            <h2 className="text-center text-4xl font-semibold mb-6">
              Registration Form
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  //ref={inputName}
                  //value={name}
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:border-blue-500"
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-red-600 text-sm pt-1">
                    {formik.errors.name}
                  </p>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block mb-1">
                  Username
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  //ref={InputEmail}
                  placeholder="username@gmail.com"
                  //value={email}
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:border-blue-500"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-600 text-sm pt-1">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  //ref={InputPassword}
                  placeholder="password"
                  //value={password}
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:border-blue-500"
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-600 text-sm pt-1">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div className="message">
                {!error ? <p>{successMessage()}</p> : <p>{errorMessage()}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
              >
                Sign Up
              </button>
              <button className="w-[100%] text-center text-sm hover:underline transition duration-500 mt-3">
                <Link to="/">Login</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </FormikProvider>
  );
}
export default Signup;

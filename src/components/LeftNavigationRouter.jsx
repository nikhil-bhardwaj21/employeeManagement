import React from "react";
import { Route, Routes, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Layout from "./Layout";
import EmployeeScreen from "./EmployeeScreen";
import Attendence from "./Attendence";
import Logout from "./Logout";
import Dashboard from "./Dashboard";
import Parent from "./Parent";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Signup from "./Signup";
import EmployeeList from "./EmployeeList";
import EmployeeListCopy from "./EmployeeList copy";

const LeftNavigationRouter = () => {
  return (
    <Routes>
      <Route path="/" index element={<Login />} />
      <Route path="/signup" index element={<Signup />} />
      <Route path="/layout" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="employees" element={<EmployeeScreen />} />
        <Route path="employees/:id" element={<EmployeeScreen />} />
        <Route path="employeeslistcopy" element={<EmployeeListCopy />} />
        <Route path="attendance" element={<Attendence />} />
        <Route path="logout" element={<Logout />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );

  // return <RouterProvider router={router} />;
};

export default LeftNavigationRouter;

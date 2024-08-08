import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const url = "https://localhost:7105/api/Employees";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getEmployees() {
      try {
        const res = await axios.get(url);
        console.log("response", res.data);
        setEmployeeList(res.data);
      } catch (error) {
        console.log("error ", error);
      }
    }

    getEmployees();
  }, []);

  const handleDelete = async (Id) => {
    try {
      await axios.delete(`${url}/${Id}`);
      setEmployeeList(employeeList.filter((employee) => employee.id !== Id));
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/layout/employees/${id}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-5 pt-0 bg-white shadow-md rounded-lg mb-3">
      <h2 className="text-center font-bold text-gray-900 mb-6 text-3xl">
        Employee List
      </h2>
      <div className="overflow-x-auto">
        <ul className="space-y-4">
          {employeeList.map((employee) => (
           
            <li
              key={employee.id}
              className="flex flex-col md:flex-row items-center md:justify-between bg-gray-100 p-1 rounded-lg shadow-sm"
            >
              <div className="flex flex-wrap md:flex md:flex-row ">
                <div className="ml-3">
                  
                  <div className="font-semibold">First Name</div>
                  <div>{employee.firstName}</div>
                </div>
                <div className="ml-3">
                  <div className="font-semibold">Last Name</div>
                  <div>{employee.lastName}</div>
                </div>
                <div className="ml-3">
                  <div className="font-semibold">Email</div>
                  <div>{employee.email}</div>
                </div>
                <div className="ml-3">
                  <div className="font-semibold">Gender</div>
                  <div>{employee.gender}</div>
                </div>
              </div>
              <div className="flex mt-1 md:mt-0">
                <button
                  onClick={() => handleEdit(employee.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ml-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeList;

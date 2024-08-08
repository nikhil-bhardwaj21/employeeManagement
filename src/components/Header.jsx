import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useSelector } from "react-redux";


const Header = () => {
  let user = useSelector((store) => store.user);
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <></>
    // <div className="flex ml-0 mb-3 items-center justify-between bg-indigo-100 md:h-20 shadow-lg p-4">
    //   <p className="font-bold text-xl md:text-3xl text-indigo-500">
    //     Employee Management System
    //   </p>

    //   <nav
    //     className={`flex-col md:flex  md:flex-row ${
    //       menuOpen ? "flex" : "hidden"
    //     } md:flex items-center space-x-0 md:space-x-4`}
    //   >
    //     <Link
    //       to="/layout/contactus"
    //       className="py-2.5 px-4 rounded transition duration-300 sm:text-red-500 md:text-indigo-500 hover:text-white hover:bg-indigo-500 "
    //     >
    //       Contact Us
    //     </Link>
    //     <Link
    //       to="/layout/aboutus"
    //       className="py-2.5 px-4 rounded transition duration-300 text-indigo-500 hover:text-white hover:bg-indigo-500 "
    //     >
    //       About Us
    //     </Link>

    //     <Link
    //       to="/login"
    //       className="py-2.5 px-4  rounded transition duration-300 md:text-indigo-500  hover:text-white hover:bg-indigo-500"
    //     >
    //       <span>{user.name}</span>
    //     </Link>
    //   </nav>
    // </div>
  );
};
export default Header;

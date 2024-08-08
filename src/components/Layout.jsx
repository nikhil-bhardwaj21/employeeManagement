import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./SideBarNavigation";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Layout() {
  const user = useSelector((store) => store.user);
  const name = user.name;
  //console.log("name", name)
  const navigate = useNavigate();

  //console.log(user);

  useEffect(() => {
    if (name === "") navigate("/");
  }, [name]);

  return name === "" ? (
    <> </>
  ) : (
    <>
      <Sidebar />
      {/* <Outlet/> */}
      <Footer />
    </>
  );
}

export default Layout;

import React from "react";
import { Link } from "react-router-dom";
// import user from "../img/user.png";
// import Login from "../basePage/Login";
import Profile from "../doctor/Profile";
// import { useState } from "react";
import { useLocation } from "react-router-dom/dist";
// import "./myc.css"
// import
// import "./patient.css";
function Side() {

 let Location = useLocation();

  const menuItems = [
    {
      path: "/admin/desh",
      text: "DashBoard",
      iconClass: "menu-icon-dashbord",
      iconHoverClass: "menu-icon-dashbord-active",
    },
    {
      path: "/admin/doctor",
      text: "Doctors",
      iconClass: "menu-icon-doctor",
      iconHoverClass: "menu-icon-doctor-active",
    },
    {
      path: "/admin/schedule",
      text: "Schedule",
      iconClass: "menu-icon-schedule",
      iconHoverClass: "menu-icon-schedule-active",
    },
    {
      path: "/admin/appointment",
      text: "Appointment",
      iconClass: "menu-icon-appoinment",
      iconHoverClass: "menu-icon-appoinment-active",
    },
    {
      path: "/admin/patient",
      text: "Patients",
      iconClass: "menu-icon-patient",
      iconHoverClass: "menu-icon-patient-active",
    },
    
  ];


  // const navigate = useNavigate()
  return (
    <div className="menu">
      <table className="menu-container" border="0">
        <tbody>
          <Profile title="Administrator" subTitle="admin@edoc.com" />
          {menuItems.map((item, index) => (
            <tr className="menu-row" key={index}>
              <td
                className={`menu-btn ${item.iconClass} ${
                  Location.pathname === item.path
                    ? `menu-active ${item.iconHoverClass}`
                    : ""
                }`}
              >
                
                <Link to={item.path} className="non-style-link-menu"></Link>
                <div>
                  <Link
                    to={item.path}
                    className={`non-style-link-menu ${
                      Location.pathname === item.path
                        ? "non-style-link-menu-active"
                        : ""
                    }`}
                  >
                    <p className="menu-text">{item.text}</p>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default Side;

import React from "react";
import Profile from "../doctor/Profile";
import AllDoctor from "./AllDoctor";
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom/dist";

function PatientSide() {

  let Location = useLocation();

  const menuItems = [
    {
      path: "/patient/patientHome",
      text: "Home",
      iconClass: "menu-icon-home",
      iconHoverClass: "menu-icon-home-active",
    },
    {
      path: "/patient/all-doctor",
      text: "All Doctors",
      iconClass: "menu-icon-doctor",
      iconHoverClass: "menu-icon-doctor-active",
    },
    {
      path: "/patient/schedule",
      text: "Scheduled Sessions",
      iconClass: "menu-icon-session",
      iconHoverClass: "menu-icon-schedule-active",
    },
    {
      path: "/patient/mybooking",
      text: "My Bookings",
      iconClass: "menu-icon-appoinment",
      iconHoverClass: "menu-icon-appoinment-active",
    },
    {
      path: "/patient/settings",
      text: "Settings",
      iconClass: "menu-icon-settings",
      iconHoverClass: "menu-icon-patient-active",
    },
    
  ];


  return (
      <div className="menu">
        <table className="menu-container" border="0">
          <tbody>
            <Profile title="Patients" subTitle="Edoc@gmail.com" />
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

export default PatientSide;

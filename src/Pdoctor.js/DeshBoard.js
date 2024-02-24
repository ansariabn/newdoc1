import React from "react";
import Profile from "../doctor/Profile";
import { Link, useLocation } from "react-router-dom";

function DeshBoard() {
  let Location = useLocation();
  console.log(Location);

  const menuItems = [
    {
      path: "/doctor/desh",
      text: "DashBoard",
      iconClass: "menu-icon-dashbord",
      iconHoverClass: "menu-icon-dashbord-active",
    },
    {
      path: "/doctor/myappointment",
      text: "My Appointments",
      iconClass: "menu-icon-appoinment",
      iconHoverClass: "menu-icon-appoinment-active",
    },
    {
      path: "/doctor/mysession",
      text: "My Sessions",
      iconClass: "menu-icon-session",
      iconHoverClass: "menu-icon-session-active",
    },
    {
      path: "/doctor/mypatient",
      text: "My Patients",
      iconClass: "menu-icon-patient",
      iconHoverClass: "menu-icon-patient-active",
    },
    {
      path: "/doctor/setting",
      text: "Settings",
      iconClass: "menu-icon-settings",
      iconHoverClass: "menu-icon-settings-active",
    },
  ];
  // {(document.title = )}
  return (
    <div className="menu">
      <table className="menu-container" border="0">
        <tbody>
          <Profile title="Doctor" subTitle="Doctor@gmail.com" />
          {/* <div className= "menu-bar" > */}
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



{/* </div> */}

          {/* <tr className="menu-row">
              <td className={`menu-btn menu-icon-dashbord ${Location.pathname=== "/doctor/desh" ? "menu-active menu-icon-dashbord-active" : ""} `}>
              <Link to={"/doctor/desh"} className="non-style-link-menu"></Link>
                <div>
                  <Link to={"/doctor/desh"} className={`non-style-link-menu ${Location.pathname ==="/doctor/desh" ? "non-style-link-menu-active" : "" } `}>
                    <p className="menu-text">DashBoard</p>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="menu-row">
              <td className={`menu-btn menu-icon-appoinment ${Location.pathname=== "/doctor/myappointment" ? "menu-active menu-icon-appoinment-active" : ""}`}>
                <Link to={"/doctor/myappointment"} className="non-style-link-menu"></Link>
                <div>
                  <Link to={"/doctor/myappointment"} className={`non-style-link-menu ${Location.pathname ==="/doctor/myappointment" ? "non-style-link-menu-active" : "" } `}>
                    <p className="menu-text">My Appointments</p>
                  </Link>
                </div>
              </td>
            </tr>

            <tr className="menu-row">
              <td className={`menu-btn menu-icon-session  ${Location.pathname=== "/doctor/mysession" ? "menu-active menu-icon-session-active" : ""}`}>
                <Link to={"/doctor/mysession"} className={`non-style-link-menu ${Location.pathname ==="/doctor/mysession" ? "non-style-link-menu-active" : "" } `}>
                  <div>
                    <p className="menu-text">My Sessions</p>
                  </div>
                </Link>
              </td>
            </tr>
            <tr className="menu-row">
              <td className={`menu-btn menu-icon-patient   ${Location.pathname=== "/doctor/mypatient" ? "menu-active menu-icon-patient-active" : ""}`}>
                <Link to = {"/doctor/mypatient"} className={`non-style-link-menu  `}></Link>
                <div>
                  <Link to={"/doctor/mypatient"} className={`non-style-link-menu ${Location.pathname ==="/doctor/mypatient" ? "non-style-link-menu-active" : "" }`}>
                    <p className="menu-text">My Patients</p>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="menu-row">
              <td className={`menu-btn menu-icon-settings    ${Location.pathname=== "/doctor/setting" ? "menu-active menu-icon-settings-active" : ""} `}>
                <Link to={"/doctor/setting"} className={`non-style-link-menu `}></Link>
                <div>
                  <Link to={"/doctor/setting"} className={`non-style-link-menu ${Location.pathname ==="/doctor/setting" ?"non-style-link-menu-active" : "" }`}>
                    <p className="menu-text">Settings</p>
                  </Link>
                </div>
              </td>
            </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default DeshBoard;

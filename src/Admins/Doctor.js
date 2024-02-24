import React from "react";
import { Link } from "react-router-dom";
import "../css/animations.css";
import "../img/icons/doctors-hover.svg"
import "../img/icons/book-hover.svg"
import "../img/icons/book-hover.svg"
import "../img/icons/session-iceblue.svg"
import "../css/admin.css";
import cal from "../img/calendar.svg"
import notFound from "../img/notfound.svg"
import "../css/patient.css";
import user from "../img/user.png";
// import my from "../admin/url.css";
import "../admin/url.css";
import AddNewD from "../admin/AddNewD";
import { useState } from "react";
import SideBar from "../admin/SideBar";
import DsideB from "../doctor/DsideB";
import Side from "./Side";
function Doctor() {
    const [add, setadd] = useState(false)
  return (
    <>
    <Side/>
    <DsideB/>
      </>
    
  );
}

export default Doctor

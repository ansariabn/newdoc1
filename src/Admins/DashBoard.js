import React from "react"
import "../css/admin.css"
// import "/src/css/admin.css"
import "../css/animations.css"
import "../css/main.css"
import "../img/icons/doctors-hover.svg"
import "../img/icons/book-hover.svg"
import "../img/icons/book-hover.svg"
import "../img/icons/session-iceblue.svg"
import { Link } from "react-router-dom";
// import user from "../img/user.png";
// import cal from "../img/calendar.svg"
// import notFound from "../img/notfound.svg"
// import SideBar from "../admin/SideBar"
// import Date from '../admin/Date'
// import my from "../admin/url.css";
import "../admin/url.css";
// import Common from "../admin/SideBar"
import ASide from "./ASide"
import Side from "./Side"
import { useEffect } from "react"
function DashBoard() {
  // const [tit, settit] = useState("")
  useEffect(() => {
    
    document.title = "DeshBoard";
    

 }, [])
  return (
    <>
    <Side/>
    <ASide/>
    </>


        
       
  )
}

export default DashBoard

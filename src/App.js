import logo from "./logo.svg";
import "./Base.css";
import Admin from "./Admins/DashBoard";
import Doctor from "./Admins/Doctor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AddNewD from './admin/AddNewD';
// import SideBar from './admin/SideBar';
import Schedule from "./Admins/Schedule";
import ApoinSide from "./Admins/ApoinSide";
// import Side from './admin/Side';
// import Pside from './Admindesh/patient/Pside';
import Pside from "./Admins/Patients";
import Login from "./basePage/Login";
import BasePage from "./basePage/BasePage";

import Sign from "./basePage/Registration";
import SignupNext from "./basePage/Signup";
import DoctorsDesh from "./Pdoctor.js/DoctorsDesh";
import MyApp from "./Pdoctor.js/MyApp";
import MyPatients from "./Pdoctor.js/MyPatients";
import Settings from "./Pdoctor.js/Settings";
import MySession from "./Pdoctor.js/MySession";
import DeshBoard from "./Pdoctor.js/DeshBoard";
import PatientsHome from "./PatientDeshboard/PatientsHome";
import AllDoctor from "./PatientDeshboard/AllDoctor";
import MyBookings from "./PatientDeshboard/MyBookings";
import PSettings from "./PatientDeshboard/PSettings";
// import "./css/patient.css";
function App() {
  // const use = [
  //   {
  //     id: 1,
  //     link: "/desh",
  //     name: "Deshboard",
  //     classN: "menu-btn menu-icon-dashbord ",
  //     anchor: "a",
  //   },
  //   {
  //     id: 2,
  //     link: "/doctor",
  //     name: "Doctors",
  //     classN: "menu-btn menu-icon-doctor  ",
  //     anchor: "a",
  //   },
  //   {
  //     id: 3,
  //     link: "/schedule",
  //     name: "Schedule",
  //     classN: "menu-btn menu-icon-schedule",
  //     anchor: "a",

  //   },
  //   {
  //     id: 4,
  //     link: "/appointment",
  //     name: "Appointment",
  //     classN: "menu-btn menu-icon-appoinment",
  //     anchor: "a",

  //   },
  //   {
  //     id: 5,
  //     link: "/patient",
  //     name: "Patients",
  //     classN: "menu-btn menu-icon-patient",
  //     anchor: "a",

  //   },
  // ];

  // const routeComponents = use.map(({ name, link }) => (
  //   <Route key={name} path={link} />
  // ));

  return (
    // <div className="App">
    //Admin DeshBoard
    <Router>
      <Routes>
        <Route path={"/"} index element={<BasePage />} />
        <Route path={"/login"} element={<Login />} />
          <Route path={"/signNext"} element={<SignupNext />} />
          <Route exact path={"/sign"} element={<Sign />} />

          
      </Routes>
      <div className="base-container">
        <Routes>
          <Route path={"/admin/desh"} element={<Admin />} />
          <Route path={"/admin/doctor"} element={<Doctor />} />
          <Route path={"/admin/schedule"} element={<Schedule />} />
          <Route  path={"/admin/appointment"} element={<ApoinSide />} />
          <Route  path={"/admin/patient"} element={<Pside />} />
        </Routes>
      </div>
    
    {/* Doctor DeshBoard */}
    
      <Routes>
      <Route path={"/doctor/desh"} element={<DoctorsDesh />} />
      <Route path={"/doctor/myappointment"} element={<MyApp />} />
      <Route path={"/doctor/mypatient"} element={<MyPatients />} />
      <Route path={"/doctor/mysession"} element={<MySession/>} />
      <Route path={"/doctor/setting"} element={<Settings/>} />
      </Routes>
    




      {/* patients DeshBoard  */}
    
      <Routes>
      <Route path={"patient/patientHome"} element={<PatientsHome/>} />
      <Route path={"patient/all-doctor"} element={<AllDoctor/>} />
      <Route path={"patient/mybooking"} element={<MyBookings/>} />
      <Route path={"patient/settings"} element={<PSettings/>} />
      </Routes>
    </Router>

  );
}

export default App;

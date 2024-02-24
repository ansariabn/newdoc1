import React from "react";
// import React from "react";
import "../css/login.css";
import "../css/animations.css";
import "../css/main.css";
import "../css/font-inter.css";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react"
import { registrationUser } from "../util/Api";



function Registration() {
  // import SignupNext from "./SignupNext";
  // import { useNavigate } from "react-router-dom";

  const [registration, setRegistration] = useState({
    fname: "",
    lname: "",
    address: "",
    nic: "",
    dob: "",
  });
  // distructring
  const { fname, lname, address, nic, dob } = registration;

  const [errorMessage, seterrorMessage] = useState("")
  const [sucessMessage , setSuccessMessage] = useState("")
 
 
  useEffect(() => {
    document.title = "Resgitration Up";
    document.body.style.background = "#F6F7FA";
    onSave();
  }, []);

  const handleChange = (e) => {
  
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  
  };

  //  let navigate = useNavigate()

  // const next = (e) =>{
  //   navigate("/SignupNext");
  // }

  const onSave = async (e) => {
   
   e.preventDefault();
  try {
    const result = await registrationUser(registration)
    setSuccessMessage(result.message);
    seterrorMessage("");
    setRegistration(registration)

  } catch (error) {
    seterrorMessage(`Registration error : ${error.message}`);
    setSuccessMessage("")
  }
  setTimeout(() => {
    setSuccessMessage("");
    seterrorMessage("");
  },4000);

    console.log(registration);
  };

  return (

      
    

    <center>
    {errorMessage && <p style={{backgroundColor:"red"}}> {errorMessage}</p>}
    {sucessMessage && <p style={{backgroundColor: "green"}}> {sucessMessage}</p>}

    <form onSubmit={onSave}>
    
      <div className="login-container">
            <table border="0">
              <tbody>
                <tr>
                  <td colSpan="2">
                    <p className="header-text">Let's Get Started</p>
                    <p className="sub-text">
                      Add Your Personal Details to Continue
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <label htmlFor="name" className="form-label">
                      Name:{" "}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="label-td">
                    <input
                      type="text"
                      name="fname"
                      className="input-text"
                      placeholder="First Name"
                      required=""
                      onChange={handleChange}
                      value={fname}
                    />
                  </td>
                  <td className="label-td">
                    <input
                      type="text"
                      name="lname"
                      className="input-text"
                      placeholder="Last Name"
                      required=""
                      onChange={handleChange}
                      value={lname}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <label htmlFor="address" className="form-label">
                      Address:{" "}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <input
                      type="text"
                      name="address"
                      className="input-text"
                      placeholder="Address"
                      required=""
                      onChange={handleChange}
                      value={address}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <label htmlFor="nic" className="form-label">
                      NIC:{" "}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <input
                      type="text"
                      name="nic"
                      className="input-text"
                      placeholder="NIC Number"
                      required=""
                      onChange={handleChange}
                      value={nic}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <label htmlFor="dob" className="form-label">
                      Date of Birth:{" "}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <input
                      type="date"
                      name="dob"
                      className="input-text"
                      required=""
                      value={dob}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2"></td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="reset"
                      value="Reset"
                      className="login-btn btn-primary-soft btn"
                    />
                  </td>
                  
                  <td style={{float:"right" }}>
                    <a href="/signNext" >
                   <input type="submit" value="Next" className="login-btn btn-primary btn" />
                   </a>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <br />
                    <label
                      htmlFor=""
                      className="sub-text"
                      style={{ fontWeight: 280 }}
                    >
                      Already have an account?{" "}
                    </label>
                    <a href={"/login"} className="hover-link1 non-style-link" >
                      Login
                    </a>
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </div> 

    </form>
    </center>

  );
}

export default Registration;

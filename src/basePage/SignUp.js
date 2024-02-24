import React, { useEffect } from "react";
import "../css/login.css";
import "../css/animations.css";
import "../css/main.css";
import "../css/font-inter.css";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [patient, setpatient] = useState({
    email: "",
    mobile: "",
    password: "",
    newPassword: "",
  });

  useEffect(() => {
    document.title = 'Login Page';
    document.body.style.background = '#F6F7FA'; 
  },[]);
  const resetchange = (e) => {
    setpatient({
      email: "",
      mobile: "",
      password: "",
      newPassword: "",
    });
  };

  const { email, mobile, password, newPassword } = patient;

  const handleChange = (e) => {
    setpatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const saveData = (e) => {
    // e.preventDefault;

    // call api from server side
    console.log(e);
  };

  useEffect(() => {
    saveData();
  }, []);
  return (
    
      <center>
        <div className="login-container">
          <form onSubmit={(e) => saveData(e)}>
            <table border="0" style={{ width: "69%" }}>
              <thead>
                <tr>
                  <td colSpan="2">
                    <p className="header-text">Let's Get Started</p>
                    <p className="sub-text">
                      It's Okey, Now Create User Account.
                    </p>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label-td" colSpan="2">
                    <label htmlFor="newemail" className="form-label">
                      Email:{" "}
                    </label>
                  </td>
                </tr>

                <tr>
                  <td className="label-td" colSpan="2">
                    <input
                      type="email"
                      name="email"
                      className="input-text"
                      value={email}
                      placeholder="Email Address"
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <label htmlFor="tele" className="form-label">
                      Mobile Number:{" "}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <input
                      type="tel"
                      name="mobile"
                      className="input-text"
                      value={mobile}
                      placeholder="ex: 0712345678"
                      pattern="[0]{1}[0-9]{9}"
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <label htmlFor="password" className="form-label">
                      Create New Password
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <input
                      type="password"
                      name="password"
                      className="input-text"
                      value={password}
                      placeholder="New Password"
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <label htmlFor="cpassword" className="form-label">
                      Conform Password:{" "}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="label-td" colSpan="2">
                    <input
                      type="password"
                      name="newPassword"
                      value={newPassword}
                      className="input-text"
                      placeholder="Conform Password"
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <label htmlFor="promter" className="form-label"></label>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <input
                      type="reset"
                      value="Reset"
                      className="login-btn btn-primary-soft btn"
                      onClick={(e) => resetchange(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="submit"
                      value="Sign Up"
                      className="login-btn btn-primary btn"
                    />
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
                    <Link to={"/login"} className="hover-link1 non-style-link">
                      Login
                    </Link>
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
              </tfoot>
            </table>
          </form>
        </div>
      </center>
    
  );
}

export default Signup;

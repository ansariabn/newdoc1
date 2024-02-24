import React from "react";
import "../css/index.css";
import "../css/animations.css";
import "../css/font-inter.css";
import "../css/main.css";
import { Link } from "react-router-dom";
function BasePage() {
    
  return (
    <div className="base-image">
      <div className="full-height">
        
          <table border="0" className="base-table">
            <tbody>
            <tr>
              <td width="80%">
                <font className="edoc-logo">eDoc. </font>
                <font className="edoc-logo-sub">| THE ECHANNELING PROJECT</font>
              </td>
              <td width="10%">
                <Link to="/login" className="non-style-link">
                  <p className="nav-item">LOGIN</p>
                </Link>
              </td>
              <td width="10%">
                <Link to="/signup" className="non-style-link">
                  <p className="nav-item" style={{paddingRight: "10px"}}>
                    REGISTER
                  </p>
                </Link>
              </td>
            </tr>

            <tr>
              <td colSpan="3">
                <p className="heading-text">Avoid Hassles & Delays.</p>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <p className="sub-text2">
                  How is health today, Sounds like not good!
                  <br/>
                    Don't worry. Find your doctor online Book as you wish with
                    eDoc.{" "}
                  
                  We offer you a free doctor channeling service, Make your
                  appointment now.
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <center>
                  <a href="login.php">
                    <input
                      type="button"
                      value="Make Appointment"
                      className="login-btn btn-primary btn my-appointment"
                    />
                  </a>
                </center>
              </td>
            </tr>
            <tr>
              <td colSpan="3"></td>
            </tr>
            </tbody>
          </table>
          <p className="sub-text2 footer-hashen">Developed by A-Nehal.</p>
        
      </div>
      </div>
  );
}

export default BasePage;

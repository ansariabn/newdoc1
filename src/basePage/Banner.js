import React from "react";
import Search from "./Search";
import "../css/patient.css";
import svg from "../img/calendar.svg";
// import "../css/font-inter.css";
// import "../css/index.css";
import "../css/admin.css";
import "../css/animations.css";

function Banner() {
  return (
    <td colSpan="4">
      <center>
        <table
          className="filter-container doctor-header patient-header"
          style={{ border: "none", width: "95%" }}
          border="0"
        >
          <tbody>
            <tr>
              <td>
                <h3>Welcome!</h3>
                <h1>sdadsadsasds dassad.</h1>
                <p>
                  Haven't any idea about doctors? no problem let's jumping to
                  <a href="doctors.php" className="non-style-link">
                    <b />
                    "All Doctors"
                    <b />
                  </a>{" "}
                  section or
                  <a href="schedule.php" className="non-style-link">
                    <b />
                    "Sessions"
                    <b />{" "}
                  </a>
                  <br />
                  Track your past and future appointments history.
                  <br />
                  Also find out the expected arrival time of your doctor or
                  medical consultant.
                  <br />
                  <br />
                </p>

                <h3>Channel a Doctor Here</h3>
                <Search />
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </td>
  );
}

export default Banner;

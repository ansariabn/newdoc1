import React from "react";
import DeshBoard from "./DeshBoard";
import Date from "../admin/Date";

function DoctorsDesh() {
  return (
    <div className="container">
      <DeshBoard />
      <div className="dash-body">
        <table
          border="0"
          width="100%"
          style={{borderSpacing: 0,margin:0,padding:0,marginTop:"25px"}}        >
          <tbody>
            <tr>
              <td colspan="1" >
                <p
                  style={{
                    fontSize: "23px",
                    paddingLeft: "12px",
                    fontWeight: "600",
                    marginLeft: "20px",
                  }}
                >
                  {" "}
                  Doctor Dashboard
                </p>
              </td>
              <td width="25%"></td>
              <Date />
            </tr>
            <tr>
              <td colspan="4">
                <center>
                  <table
                    className="filter-container doctor-header"
                    style={{ border: "none", width: "95%" }}
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <h3>Welcome!</h3>
                          <h1>i.</h1>
                          <p>
                            Thanks for joinnig with us. We are always trying to
                            get you a complete service
                            <br />
                            You can view your dailly schedule, Reach Patients
                            Appointment at home!
                            <br />
                            <br />
                          </p>
                          <a href="appointment.php" className="non-style-link">
                            <button
                              className="btn-primary btn"
                              style={{ width: "30%" }}
                            >
                              View My Appointments
                            </button>
                          </a>
                          <br />
                          <br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </center>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <table border="0" width="100%">
                  <tbody>
                    <tr>
                      <td width="50%">
                        <center>
                          <table
                            className="filter-container"
                            style={{ border: "none" }}
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td colspan="4">
                                  <p
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "600",
                                      paddingLeft: "12px",
                                    }}
                                  >
                                    Status
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td style={{width: "25%"}}>
                                  <div
                                    className="dashboard-items"
                                    style={{
                                      padding: "20px",
                                      margin: "auto",
                                      width: "95%",
                                      display: "flex",
                                    }}
                                  >
                                    <div>
                                      <div className="h1-dashboard">1 </div>
                                      <br />
                                      <div className="h3-dashboard">
                                        All Doctors
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                    </div>
                                    <div
                                      className="btn-icon-back dashboard-icons"
                                      style={{
                                        backgroundImage:
                                          "url('../img/icons/doctors-hover.svg')",
                                      }}
                                    ></div>
                                  </div>
                                </td>
                                <td style={{width: "25%"}}>
                                  <div
                                    className="dashboard-items"
                                    style={{
                                      padding: "20px",
                                      margin: "auto",
                                      width: "95%",
                                      display: "flex",
                                    }}
                                  >
                                    <div>
                                      <div className="h1-dashboard">7 </div>
                                      <br />
                                      <div className="h3-dashboard">
                                        All Patients
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                    </div>
                                    <div
                                      className="btn-icon-back dashboard-icons"
                                      style={{
                                        backgroundImage:
                                          "url('../img/icons/patients-hover.svg')",
                                      }}
                                    ></div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td style={{width: "25%"}}>
                                  <div
                                    className="dashboard-items"
                                    style={{
                                      padding: "20px",
                                      margin: "auto",
                                      width: "95%",
                                      display: "flex",
                                    }}
                                  >
                                    <div>
                                      <div className="h1-dashboard">0 </div>
                                      <br />
                                      <div className="h3-dashboard">
                                        NewBooking &nbsp;&nbsp;
                                      </div>
                                    </div>
                                    <div
                                      className="btn-icon-back dashboard-icons"
                                      style={{
                                        marginLeft: "0px",
                                        backgroundImage:
                                          "url('../img/icons/book-hover.svg')",
                                      }}
                                    ></div>
                                  </div>
                                </td>

                                <td style={{width: "25%"}}>
                                  <div
                                    className="dashboard-items"
                                    style={{
                                      padding: "20px",
                                      margin: "auto",
                                      width: "95%",
                                      display: "flex",
                                      paddingTop: "21px",
                                      paddingBottom: "21px",
                                    }}
                                  >
                                    <div>
                                      <div className="h1-dashboard">0 </div>
                                      <br />
                                      <div
                                        className="h3-dashboard"
                                        style={{ fontSize: "15px" }}
                                      >
                                        Today Sessions
                                      </div>
                                    </div>
                                    <div
                                      className="btn-icon-back dashboard-icons"
                                      style={{
                                        backgroundImage:
                                          "url('../img/icons/session-iceblue.svg')",
                                      }}
                                    ></div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </center>
                      </td>
                      <td>
                        <p
                          id="anim"
                          style={{
                            fontSize: "20px",
                            fontWeight: 600,
                            paddingLeft: "40px",
                          }}
                        >
                          Your Up Coming Sessions until Next week
                        </p>
                        <center>
                          <div
                            className="abc scroll"
                            style={{ height: "250px", padding: 0, margin: 0 }}
                          >
                            <table
                              width="85%"
                              className="sub-table scrolldown"
                              border="0"
                            >
                              <thead>
                                <tr>
                                  <th className="table-headin">
                                    Session Title
                                  </th>

                                  <th className="table-headin">
                                    Sheduled Date
                                  </th>
                                  <th className="table-headin">Time</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td colspan="4">
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <center>
                                      <img
                                        src="../img/notfound.svg"
                                        width="25%"
                                      />

                                      <br />
                                      <p
                                        className="heading-main12"
                                        style={{
                                          marginLeft: "45px",
                                          fontSize: "20px",
                                          color: "rgb(49, 49, 49)",
                                        }}
                                      >
                                        We couldnt find anything related to your
                                        keywords !
                                      </p>
                                      <a
                                        className="non-style-link"
                                        href="schedule.php"
                                      >
                                        <button
                                          className="login-btn btn-primary-soft btn"
                                          style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginLeft: "20px",
                                          }}
                                        >
                                          &nbsp; Show all Sessions &nbsp;
                                        </button>
                                      </a>
                                    </center>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </center>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoctorsDesh;

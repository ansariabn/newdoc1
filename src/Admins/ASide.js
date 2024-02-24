import React from "react";
import Date from "../admin/Date";
import notFound from "../img/notfound.svg";
import Search2 from "../admin/Search2";
// import BackButton from "../../admin/BackButton";



function ASide() {

  return (
    <div className="dash-body" >
      <table border="0" width="100%">
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
                  Admin
                </p>
                </td>
            {/* <td width="13%"></td> */}
            <td>
              <Search2 />
            </td>
            <Date />
          </tr>
          <tr>
            <td colspan="4">
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
                            paddingLeft: " 12px",
                          }}
                        >
                          Status
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>
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
                              Doctors &nbsp; &nbsp; &nbsp;
                            </div>
                          </div>
                          <div
                            className="btn-icon-back dashboard-icons doc"
                            // style ={second}
                          ></div>
                        </div>
                      </td>
                      <td style={{ width: "25%" }}>
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
                              Patients &nbsp; &nbsp; &nbsp;
                            </div>
                          </div>
                          <div
                            className="btn-icon-back dashboard-icons patient"
                            // style ={{backgroundImage: "('../img/icons/patients-hover.svg')"}}
                          ></div>
                        </div>
                      </td>
                      <td style={{ width: "25%" }}>
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
                              New Booking &nbsp; &nbsp; &nbsp;
                            </div>
                          </div>
                          <div
                            className="btn-icon-back dashboard-icons book"
                            style={{ marginLeft: "0px" }}
                          ></div>
                        </div>
                      </td>
                      <td style={{ width: "25%" }}>
                        <div
                          className="dashboard-items"
                          style={{
                            padding: "15px",
                            margin: "auto",
                            width: "95%",
                            display: "flex",
                            paddingTop: "26px",
                            paddingBottom: "26px",
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
                            className="btn-icon-back dashboard-icons sessions"
                            // style ={{backgroundImage: "('../img/icons/session-iceblue.svg')"}}
                            // style={my}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
            </td>
          </tr>

          <tr>
            <td colspan="4">
              <table width="100%" border="0" className="dashbord-tables">
                <tbody>
                  <tr>
                    <td>
                      <p
                        style={{
                          padding: "10px",
                          paddingLeft: "48px",
                          paddingBottom: "0",
                          fontSize: "23px",
                          fontWeight: "700",
                          color: "var(--primarycolor)",
                        }}
                      >
                        Upcoming Appointments until Next Saturday{" "}
                      </p>
                      <p
                        style={{
                          paddingBottom: "19px",
                          paddingLeft: "50px",
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "#212529e3",
                          lineHeight: "20px",
                        }}
                      >
                        Here's Quick access to Upcoming Appointments until 7
                        days
                        <br />
                        More details available in @Appointment section.
                      </p>
                    </td>
                    <td>
                      <p
                        style={{
                          textAlign: "right",
                          padding: "10px",
                          paddingRight: "48px",
                          paddingBottom: "0",
                          fontSize: "23px",
                          fontWeight: "700",
                          color: "var(--primarycolor)",
                        }}
                      >
                        Upcoming Sessions until Next Saturday{" "}
                      </p>
                      <p
                        style={{
                          paddingBottom: "19px",
                          textAlign: "right",
                          paddingRight: "50px",
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "#212529e3",
                          lineHeight: "20px",
                        }}
                      >
                        Here's Quick access to Upcoming Sessions that Scheduled
                        until 7 days
                        <br />
                        Add,Remove and Many features available in @Schedule
                        section.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%">
                      <center>
                        <div className="abc scroll" style={{ height: "200px" }}>
                          <table
                            width="85%"
                            className="sub-table scrolldown"
                            border="0"
                          >
                            <thead>
                              <tr>
                                <th
                                  className="table-headin"
                                  style={{ fontSize: "12px" }}
                                >
                                  Appointment number
                                </th>
                                <th className="table-headin">Patient name</th>
                                <th className="table-headin">Doctor</th>
                                <th className="table-headin">Session</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colspan="3">
                                  <br />
                                  <br />
                                  <br />
                                  <br />
                                  <center>
                                    <img src={notFound} width="25%" />

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
                                      href="appointment.php"
                                    >
                                      <button
                                        className="login-btn btn-primary-soft btn"
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginleft: "20px",
                                        }}
                                      >
                                         Show all Appointments 
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
                    <td width="50%" style={{ padding: "0" }}>
                      <center>
                        <div
                          className="abc scroll"
                          style={{ height: "200px", padding: 0, margin: 0 }}
                        >
                          <table
                            width="85%"
                            className="sub-table scrolldown"
                            border="0"
                          >
                            <thead>
                              <tr>
                                <th className="table-headin">Session Title</th>

                                <th className="table-headin">Doctor</th>
                                <th className="table-headin">
                                  Sheduled Date &amp; Time
                                </th>
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
                                    <img src={notFound} width="25%" />

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
                                        Show all Sessions
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
                  <tr>
                    <td>
                      <center>
                        <a href="appointment.php" className="non-style-link">
                          <button
                            className="btn-primary btn"
                            style={{ width: "85%" }}
                          >
                            Show all Appointments
                          </button>
                        </a>
                      </center>
                    </td>
                    <td>
                      <center>
                        <a href="schedule.php" className="non-style-link">
                          <button
                            className="btn-primary btn"
                            style={{ width: "85%" }}
                          >
                            Show all Sessions
                          </button>
                        </a>
                      </center>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ASide;

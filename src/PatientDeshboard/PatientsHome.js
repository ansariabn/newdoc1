import React from 'react'
import BackButton from '../admin/BackButton'
import PatientSide from './PatientSide'
import Date from '../admin/Date'
import Search2 from '../admin/Search2'

function PatientsHome() {
  return (

    <div  className='container'>
      <PatientSide/>
    <div className="dash-body" style={{marginTop: "15px"}}>
        <table
          border="0"
          width="100%"
          style={{borderSpacing: 0,margin:0,padding:0}}
        >
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
                  Patients Dashboard
                </p>
              </td>
              <td width="28%"></td>
              <Date />
            </tr>
            <tr>
              <td colspan="4">
                <center>
                  <table
                    className="filter-container doctor-header patient-header"
                    style={{border: "none",width:"95%"}}
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <h3>Welcome!</h3>
                          <h1>mjbjer kjfkjds.</h1>
                          <p>
                            Haven't any idea about doctors? no problem let's
                            jumping to
                            <a href="doctors.php" className="non-style-link">
                              <b>"All Doctors"</b>
                            </a>{" "}
                            section or
                            <a href="schedule.php" className="non-style-link">
                              <b>"Sessions"</b>{" "}
                            </a>
                            <br />
                            Track your past and future appointments history.
                            <br />
                            Also find out the expected arrival time of your
                            doctor or medical consultant.
                            <br />
                            <br />
                          </p>

                          <h3  >Channel a Doctor Here</h3>
                          
                          <Search2  />
                          
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
                            style={{border: "none"}}
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td colspan="4">
                                  <p style={{fontSize: "20px",fontWeight:600,paddingLeft: "12px"}}>
                                    Status
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td style={{width: "25%"}}>
                                  <div
                                    className="dashboard-items"
                                    style={{padding:"20px",margin:"auto",width:"95%",display: "flex"}}
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
                                      style={{backgroundImage: "url('../img/icons/doctors-hover.svg')"}}
                                    ></div>
                                  </div>
                                </td>
                                <td style={{width: "25%"}}>
                                  <div
                                    className="dashboard-items"
                                    style={{padding:"20px",margin:"auto",width:"95%",display: "flex"}}
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
                                      style={{backgroundImage: "url('../img/icons/patients-hover.svg')"}}
                                    ></div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td style={{width: "25%"}}>
                                  <div
                                    className="dashboard-items"
                                    style={{padding:"20px",margin:"auto",width:"95%",display: "flex "}}
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
                                      style={{marginLeft: "0px",backgroundImage: "url('../img/icons/book-hover.svg')"}}
                                    ></div>
                                  </div>
                                </td>

                                <td style={{width: "25%"}}>
                                  <div
                                    className="dashboard-items"
                                    style={{padding:"20px",margin:"auto",width:"95%",display: "flex",paddingTop:"21px",paddingBottom:"21px"}}
                                  >
                                    <div>
                                      <div className="h1-dashboard">0 </div>
                                      <br />
                                      <div
                                        className="h3-dashboard"
                                        style={{fontSize: "15px"}}
                                      >
                                        Today Sessions
                                      </div>
                                    </div>
                                    <div
                                      className="btn-icon-back dashboard-icons"
                                      style={{backgroundImage: "url('../img/icons/session-iceblue.svg')"}}
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
                          style={{fontSize: "20px",fontWeight:600,paddingLeft: "40px"}}
                          className="anime"
                        >
                          Your Upcoming Booking
                        </p>
                        <center>
                          <div
                            className="abc scroll"
                            style={{height: "250px",padding: 0,margin: 0}}
                          >
                            <table
                              width="85%"
                              className="sub-table scrolldown"
                              border="0"
                            >
                              <thead>
                                <tr>
                                  <th className="table-headin">
                                    Appoint. Number
                                  </th>
                                  <th className="table-headin">
                                    Session Title
                                  </th>

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
                                      <img
                                        src="../img/notfound.svg"
                                        width="25%"
                                      />

                                      <br />
                                      <p
                                        className="heading-main12"
                                        style={{marginLeft: "45px",fontSize:"20px",color:"rgb(49, 49, 49)"}}
                                      >
                                        Nothing to show here!
                                      </p>
                                      <a
                                        className="non-style-link"
                                        href="schedule.php"
                                      >
                                        <button
                                          className="login-btn btn-primary-soft btn"
                                          style={{display: "flex",justifyContent: "center",alignItems: "center",marginLeft:"20px"}}
                                        >
                                          &nbsp; Channel a Doctor &nbsp;
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
  )
}

export default PatientsHome
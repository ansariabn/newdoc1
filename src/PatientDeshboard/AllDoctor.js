import React from "react";
import BackButton from "../admin/BackButton";
import Search2 from "../admin/Search2";
import PatientSide from "./PatientSide";
import Date from "../admin/Date";


function AllDoctor() {
  return (
    <div className="container">
        <PatientSide/>
      <div className="dash-body">
        <table
          border="0"
          width="100%"
          style={{ borderSpacing: "0", margin: "0", padding: "0", marginTop: "25px" }}
        >
          <tbody>
            <tr>
              <BackButton />
              <td>
                <Search2 />
              </td>
              <Date/>
            </tr>

            <tr>
              <td colspan="4" style={{paddingTop:"10px"}}>
                <p
                  className="heading-main12"
                  style={{
                    marginLeft: "45px",
                    fontSize: "18px",
                    color: "rgb(49, 49, 49)",
                  }}
                >
                  All Doctors (1)
                </p>
              </td>
            </tr>

            <tr>
              <td colspan="4">
                <center>
                  <div className="abc scroll">
                    <table
                      width="93%"
                      className="sub-table scrolldown"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th className="table-headin">Doctor Name</th>
                          <th className="table-headin">Email</th>
                          <th className="table-headin">Specialties</th>
                          <th className="table-headin">Events</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> &nbsp;i</td>
                          <td>skjdabkhsd@gmail.com</td>
                          <td>Accident and emergen</td>

                          <td>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <a
                                href="?action=view&amp;id=2"
                                className="non-style-link"
                              >
                                <button
                                  className="btn-primary-soft btn button-icon btn-view"
                                  style={{
                                    paddingLeft: "40px",
                                    paddingTop: "12px",
                                    paddingBottom: "12px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <font className="tn-in-text">View</font>
                                </button>
                              </a>
                              &nbsp;&nbsp;&nbsp;
                              <a
                                href="?action=session&amp;id=2&amp;name=i"
                                className="non-style-link"
                              >
                                <button
                                  className="btn-primary-soft btn button-icon menu-icon-session-active"
                                  style={{
                                    paddingLeft: "40px",
                                    paddingTop: "12px",
                                    paddingBottom: "12px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <font className="tn-in-text">Sessions</font>
                                </button>
                              </a>
                            </div>
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
      </div>
    </div>
  );
}

export default AllDoctor;

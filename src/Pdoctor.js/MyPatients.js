import React from "react";
import BackButton from "../admin/BackButton";
import Search2 from "../admin/Search2";
import DeshBoard from "./DeshBoard";
import Date from "../admin/Date";

function MyPatients() {
  return (
    <div className="container">
      <DeshBoard />
      <div className="dash-body">
        <table
          border="0"
          width="100%"
          style={{ borderSpacing: 0, margin: 0, padding: 0, marginTop: "25px" }}
        >
          <tbody>
            <tr>
              <BackButton />
              <td>
                <Search2 />
              </td>
              <Date />
            </tr>

            <tr>
              <td colspan="4" style={{ paddingTop: "10px" }}>
                <p
                  className="heading-main12"
                  style={{
                    marginLeft: "45px",
                    fontSize: "18px",
                    color: "rgb(49, 49, 49)",
                  }}
                >
                  My Patients (0)
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="4" style={{ paddingTop: "0px", width: "100%" }}>
                <center>
                  <table className="filter-container" border="0">
                    <form action="" method="post"></form>

                    <tbody>
                      <tr>
                        <td style={{ textAlign: "right" }}>
                          Show Details About : &nbsp;
                        </td>
                        <td width="30%">
                          <select
                            name="showonly"
                            id=""
                            className="box filter-container-items"
                            style={{ width: "90%", height: "37px", margin: 0 }}
                          >
                            <option value="" disabled="" selected="" hidden="">
                              My patients Only
                            </option>
                            <option value="my">My Patients Only</option>
                            <option value="all">All Patients</option>
                          </select>
                        </td>
                        <td width="12%">
                          <input
                            type="submit"
                            name="filter"
                            value=" Filter"
                            className=" btn-primary-soft btn button-icon btn-filter"
                            style={{
                              padding: "15px",
                              margin: 0,
                              width: "100%",
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </center>
              </td>
            </tr>

            <tr>
              <td colspan="4">
                <center>
                  <div className="abc scroll">
                    <table
                      width="93%"
                      className="sub-table scrolldown"
                      style={{ borderSpacing: 0 }}
                    >
                      <thead>
                        <tr>
                          <th className="table-headin">Name</th>
                          <th className="table-headin">NIC</th>
                          <th className="table-headin">Telephone</th>
                          <th className="table-headin">Email</th>
                          <th className="table-headin">Date of Birth</th>
                          <th className="table-headin">Events</th>
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
                              <img src="../img/notfound.svg" width="25%" />

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
                              <a className="non-style-link" href="patient.php">
                                <button
                                  className="login-btn btn-primary-soft btn"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    aligItems: "center",
                                    marginLeft: "20px",
                                  }}
                                >
                                  &nbsp; Show all Patients &nbsp;
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
      </div>
    </div>
  );
}

export default MyPatients;

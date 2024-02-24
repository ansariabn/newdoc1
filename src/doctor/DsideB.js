import React from "react";
import { Link } from "react-router-dom";
// import "../css/animations.css";
import "../img/icons/doctors-hover.svg";
import "../img/icons/book-hover.svg";
import "../img/icons/book-hover.svg";
import "../img/icons/session-iceblue.svg";

// import cal from "/src/img/calendar.svg";
import notFound from "../img/notfound.svg"
import "../css/patient.css";
// import user from "../img/user.png";
// import my from "../admin/url.css";
import "../admin/url.css";
import { useState, useEffect } from "react";
import BackButton from "../admin/BackButton";

import Search2 from "../admin/Search2";
import Date from "../admin/Date";
import AddNewD from "../admin/AddNewD";
import EditDoctor from "../admin/EditDoctor";
import ViewDoctor from "../admin/ViewDoctor";
import DeleteDoctor from "../admin/DeleteDoctor";
import { getAllDoctor } from "../util/Api";
import NotFound from "../Admins/NotFound";
function DsideB() {
  const [add, setadd] = useState(false);
  useEffect(() => {
    document.title = "Doctors";
  }, []);

  const [AllDoctor, SetDoctor] = useState([]);

  const [result, setResult] = useState(false);
  useEffect(() => {
    getAllDoctor()
      .then((data) => {
        SetDoctor(data);
        setResult(true);
      })
      .catch((error) => {
        setResult(false);
      });
  });

  return (
    <div className="dash-body" style={{ marginTop: "15px" }}>
      <table border="0" width="100%">
        <tbody>
          <tr>
            <BackButton />
            <td>
              <Search2 />
            </td>
            <Date />
          </tr>

          <tr>
            <td colspan="2" style={{ paddingTop: "30px" }}>
              <p
                className="heading-main12"
                style={{
                  marginLeft: "45px",
                  fontSize: "20px",
                  color: "rgb(49, 49, 49)",
                }}
              >
                Add New Doctor
              </p>
            </td>
            <td colspan="2">
              <Link
                to="?action=add&amp;id=none&amp;error=0"
                className="non-style-link"
              >
                <button
                  onClick={(e) => setadd(true)}
                  className="login-btn btn-primary btn button-icon"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "75px",
                    backgroundImage: " url('../img/icons/add.svg')",
                  }}
                >
                  Add New
                </button>
                {add && <AddNewD onClose={() => setadd(false)} />}
              </Link>
            </td>
          </tr>
          <tr>
            <td colspan="4" style={{ paddingTop: "10px" }}>
              <p
                className="heading-main12"
                style={{
                  marginLeft: " 45px",
                  fontSize: "18px",
                  color: "rgb(49, 49, 49)",
                }}
              >
                All Doctors (1)
              </p>
            </td>
          </tr>
          {result ? (
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
                        {AllDoctor.map((doctor, index) => (
                          <tr>
                            <td> &nbsp; {doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.specialities}</td>

                            <td>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <a
                                  href="?action=edit&amp;id=1&amp;error=0"
                                  className="non-style-link"
                                >
                                  <button
                                    onClick={(e) => setadd(true)}
                                    className="btn-primary-soft btn button-icon btn-edit"
                                    style={{
                                      paddingLeft: "40px",
                                      paddingTop: "12px",
                                      paddingBottom: "12px",
                                      marginTop: "10px",
                                    }}
                                  >
                                    <font className="tn-in-text">Edit</font>
                                  </button>
                                  {add && (
                                    <EditDoctor onClose={() => setadd(false)} />
                                  )}
                                </a>
                                &nbsp;&nbsp;&nbsp;
                                <a
                                  href="?action=view&amp;id=1"
                                  className="non-style-link"
                                >
                                  <button
                                    onClick={(e) => setadd(true)}
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
                                  {add && (
                                    <ViewDoctor onClose={() => setadd(false)} />
                                  )}
                                </a>
                                &nbsp;&nbsp;&nbsp;
                                <a
                                  href="?action=drop&amp;id=1&amp;name=Test Doctor"
                                  className="non-style-link"
                                >
                                  <button
                                    onClick={(e) => setadd(true)}
                                    className="btn-primary-soft btn button-icon btn-delete"
                                    style={{
                                      paddingLeft: "40px",
                                      paddingTop: "12px",
                                      paddingBottom: "12px",
                                      marginTop: "10px",
                                    }}
                                  >
                                    <font className="tn-in-text">Remove</font>
                                  </button>
                                  {add && (
                                    <DeleteDoctor
                                      onClose={(e) => setadd(false)}
                                    />
                                  )}
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </center>
              </td>
            </tr>
          ) : (
            <NotFound/>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DsideB;

import React from "react";
import BackButton from "../admin/BackButton";
import Search2 from "../admin/Search2";
import Date from "../admin/Date";
import {  useEffect } from "react";
// import axios from "axios";
import Side from "./Side";
function Patients() {
    // const [patients, setpatient] = useState([])
    useEffect(() => {
      document.title = "Patients";
    
    }, [])

    // useEffect(() => {

    //     loadPatients();
    // });

    // const loadPatients = async(e) =>{

    //     const result = await axios.get("")

    //     setpatient(result.data)


    // }

  return (
    <>
    <Side/>
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
                All Patients (7)
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
                        {/* {
                            patients.map((patient,index)=>(
                                <tr key={index}>
                        <td>{patient.name}</td>
                        <td>{patient.nic}</td>
                        <td>{patient.tel}</td>
                        <td>{patient.email}</td>
                        <td>{patient.dob}</td>
                        <td>
                          <div
                            style={{ display: "flex", justifyContent: "center" }}
                          >
                            <a
                              href="?action=view&amp;id=7"
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
                          </div>
                        </td>
                      </tr>
                            ))
                        } */}
                      <tr>
                        <td> &nbsp;sdadsadsasds dassad</td>
                        <td>20321</td>
                        <td>0123654787</td>
                        <td>s@gmail.com</td>
                        <td>2222-02-22</td>
                        <td>
                          <div
                            style={{ display: "flex", justifyContent: "center" }}
                          >
                            <a
                              href="?action=view&amp;id=7"
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> &nbsp;esfdsfd fddfs</td>
                        <td>d</td>
                        <td>0123654789</td>
                        <td>a@gmail.com</td>
                        <td>2222-02-21</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <a
                              href="?action=view&amp;id=6"
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> &nbsp;mjbjer kjfkjds</td>
                        <td>dfsdf</td>
                        <td>0123654781</td>
                        <td>sa@gmail.com</td>
                        <td>2012-12-20</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <a
                              href="?action=view&amp;id=5"
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> &nbsp;n a</td>
                        <td>123654</td>
                        <td>0147823698</td>
                        <td>an@gmail.com</td>
                        <td>2023-12-02</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <a
                              href="?action=view&amp;id=4"
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> &nbsp;mjbjer kjfkjds</td>
                        <td>dfsdf</td>
                        <td>0721012536</td>
                        <td>ansari@gmail.com</td>
                        <td>2000-03-02</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <a
                              href="?action=view&amp;id=3"
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> &nbsp;Hashen Udara</td>
                        <td>0110000000</td>
                        <td>0700000000</td>
                        <td>emhashenudara@gmail.</td>
                        <td>2022-06-03</td>
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> &nbsp;Test Patient</td>
                        <td>0000000000</td>
                        <td>0120000000</td>
                        <td>patient@edoc.com</td>
                        <td>2000-01-01</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <a
                              href="?action=view&amp;id=1"
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
    </>
  );
}

export default Patients;

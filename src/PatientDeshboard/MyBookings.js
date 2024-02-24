import React from "react";
import BackButton from "../admin/BackButton";
import PatientSide from "./PatientSide";
import Date from "../admin/Date";

function MyBookings() {
  return (
    <div className="container" >
    <PatientSide/>
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
              <p
                style={{
                  fontSize: "23px",
                  paddingLeft: "12px",
                  fontWeight: 600,
                }}
              >
                My Bookings history
              </p>
            </td>
            <Date/>
          </tr>

          {/* <tr>
                    <td colspan="4" >
                        <div style="display: flex;margin-top: 40px;">
                        <div className="heading-main12" style="margin-left: 45px;font-size:20px;color:rgb(49, 49, 49);margin-top: 5px;">Schedule a Session</div>
                        <a href="?action=add-session&id=none&error=0" className="non-style-link"><button  className="login-btn btn-primary btn button-icon"  style="margin-left:25px;background-image: url('../img/icons/add.svg');">Add a Session</font></button>
                        </a>
                        </div>
                    </td>
                </tr> */}
          <tr>
            <td colspan="4" style={{ paddingTop: "10px", width: "100%" }}>
              <p
                className="heading-main12"
                style={{
                  marginLeft: "45px",
                  fontSize: "18px",
                  color: "rgb(49, 49, 49)",
                }}
              >
                My Bookings (0)
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="4" style={{ paddingTop: "0px", width: "100%" }}>
              <center>
                <table className="filter-container" border="0">
                  <tbody>
                    <tr>
                      <td width="10%"></td>
                      <td width="5%" style={{ textAlign: "center" }}>
                        Date:
                      </td>
                      <td width="30%">
                        <form action="" method="post">
                          <input
                            type="date"
                            name="sheduledate"
                            id="date"
                            className="input-text filter-container-items"
                            style={{ margin: 0, width: "95%" }}
                          />
                        </form>
                      </td>

                      <td width="12%">
                        <input
                          type="submit"
                          name="filter"
                          value=" Filter"
                          className=" btn-primary-soft btn button-icon btn-filter"
                          style={{ padding: "15px", margin: 0, width: "100%" }}
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
                    border="0"
                    style={{ border: "none" }}
                  >
                    <tbody>
                      <tr>
                        <td colspan="7">
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
                              We couldnt find anything related to your keywords
                              !
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
                                  marginLeft: "20px",
                                }}
                              >
                                &nbsp; Show all Appointments &nbsp;
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

export default MyBookings;

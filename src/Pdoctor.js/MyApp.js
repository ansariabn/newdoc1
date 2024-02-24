import React from "react";
import BackButton from "../admin/BackButton";
import DeshBoard from "./DeshBoard";
import Date from "../admin/Date";

function MyApp() {
  return (
    <div className="container">
    <DeshBoard/>
    <div className="dash-body">
      <table
        border="0"
        width="100%"
        style={{borderSpacing: 0,margin:0,padding:0,marginTop:"25px"}}      >
        <tbody>
        <tr>
              <BackButton />
              <td>
                {/* <Search2 /> */}
              </td>
              <Date />
            </tr>
          <tr>
            <td colspan="4" style={{paddingTop:"10px",width: "100%"}}>
              <p
                className="heading-main12"
                style={{marginLeft: "45px",fontSize:"18px",color:"rgb(49, 49, 49)"}}
              >
                My Appointments (0)
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="4" style={{paddingTop:"0px",width: "100%"}}>
              <center>
                <table className="filter-container" border="0">
                  <tbody>
                    <tr>
                      <td width="10%"></td>
                      <td width="5%" style={{textAlign: "center"}}>
                        Date:
                      </td>
                      <td width="30%">
                        <form action="" method="post">
                          <input
                            type="date"
                            name="sheduledate"
                            id="date"
                            className="input-text filter-container-items"
                            style={{margin: 0,width: "95%"}}
                          />
                        </form>
                      </td>

                      <td width="12%">
                        <input
                          type="submit"
                          name="filter"
                          value=" Filter"
                          className=" btn-primary-soft btn button-icon btn-filter"
                          style={{padding: "15px", margin :0,width:"100%"}}
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
                  >
                    <thead>
                      <tr>
                        <th className="table-headin">Patient name</th>
                        <th className="table-headin">Appointment number</th>

                        <th className="table-headin">Session Title</th>

                        <th className="table-headin">
                          Session Date &amp; Time
                        </th>

                        <th className="table-headin">Appointment Date</th>

                        <th className="table-headin">Events</th>
                      </tr>
                    </thead>
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
                              style={{marginLeft: "45px",fontSize:"20px",color:"rgb(49, 49, 49)"}}
                            >
                              We couldnt find anything related to your keywords
                              !
                            </p>
                            <a className="non-style-link" href="schedule.php">
                              <button
                                className="login-btn btn-primary-soft btn"
                                style={{display: "flex",justifyContent: "center",alignItems: "center",marginLeft:"20px"}}
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
    </div>
    </div>
  );
}

export default MyApp;

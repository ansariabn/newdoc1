import React from "react";
import Date from "../admin/Date";
import BackButton from "../admin/BackButton";
import Search2 from "../admin/Search2";
import { useEffect } from "react";
import { getSesssion } from "../util/Api";
import NotFound from "./NotFound";
function Sside() {
  useEffect(() => {
    document.title = "Schedule";
  }, []);

  const [AllSession, SetSession] = useState([]);

  const [result, setResult] = useState(false);
  useEffect(() => {
    getSesssion()
      .then((data) => {
        SetSession(data);
        setResult(true);
      })
      .catch((error) => {
        setResult(false);
      });
  });

  return (
    <div class="dash-body" style={{ marginTop: "15px" }}>
      <table border="0" width="100%">
        <tbody>
          <tr>
            <BackButton />
            <td width="13">
              <p
                style={{
                  fontSize: "20px",
                  padding: 0,
                  fontWeight: "600",
                  marginLeft: 0,
                  textAlign: "center",
                }}
              >
                Shedule Manager
              </p>
            </td>
            <Date />
          </tr>

          <tr>
            <td colspan="4">
              <div style={{ display: "flex", marginTop: "40px" }}>
                <div
                  class="heading-main12"
                  style={{
                    marginLeft: "45px",
                    fontSize: "20px",
                    color: "rgb(49, 49, 49)",
                    marginTop: "5px",
                  }}
                >
                  Schedule a Session
                </div>
                <a
                  href="?action=add-session&amp;id=none&amp;error=0"
                  class="non-style-link"
                >
                  <button
                    class="login-btn btn-primary btn button-icon"
                    style={{
                      marginLeft: "25px",
                      backgroundImage: "url('../img/icons/add.svg')",
                    }}
                  >
                    Add a Session
                  </button>
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="4" style={{ paddingTop: "10px", width: "100%" }}>
              <p
                class="heading-main12"
                style={{
                  marginLeft: "45px",
                  fontSize: "18px",
                  color: "rgb(49, 49, 49)",
                }}
              >
                All Sessions (6)
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="4" style={{ paddingTop: "0px", width: "100%" }}>
              <center>
                <table class="filter-container" border="0">
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
                            class="input-text filter-container-items"
                            style={{ margin: 0, width: "95%" }}
                          />
                        </form>
                      </td>
                      <td width="5%" style={{ textAlign: "center" }}>
                        Doctor:
                      </td>
                      <td width="30%">
                        <select
                          name="docid"
                          id=""
                          class="box filter-container-items"
                          style={{ width: "90%", height: "37px", margin: 0 }}
                        >
                          <option value="" disabled="" selected="" hidden="">
                            Choose Doctor Name from the list
                          </option>
                        </select>
                      </td>
                      <td width="12%">
                        <input
                          type="submit"
                          name="filter"
                          value=" Filter"
                          class=" btn-primary-soft btn button-icon btn-filter"
                          style={{ padding: "15px", margin: 0, width: "100%" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
            </td>
          </tr>
          {result ?  <tr>
            <td colspan="4">
              <center>
                <div class="abc scroll">

                  
                  <table width="93%" class="sub-table scrolldown" border="0">
                    
                    <thead>
                      <tr>
                        <th class="table-headin">Session Title</th>

                        <th class="table-headin">Doctor</th>
                        <th class="table-headin">Sheduled Date &amp; Time</th>
                        <th class="table-headin">Max num that can be booked</th>

                        <th class="table-headin">Events</th>
                      </tr>
                    </thead>
                    {AllSession.map((session) => (
                      <tr>
                        <td> &nbsp;{session.title}</td>
                        <td>{session.doctor}</td>
                        <td style={{textAlign:"center"}}>{session.date}</td>
                        <td style={{textAlign:"center"}}>{session.book}</td>

                        <td>
                          <div style={{display:"flex",justifyContent: "center"}}>
                            <a
                              href="?action=view&amp;id=1"
                              class="non-style-link"
                            >
                              <button
                                class="btn-primary-soft btn button-icon btn-view"
                                style={{paddingLeft: "40px",paddingTop: "12px",paddingBottom: "12px",marginTop: "10px"}}
                              >
                                <font class="tn-in-text">View</font>
                              </button>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a
                              href="?action=drop&amp;id=1&amp;name=Test Session"
                              class="non-style-link"
                            >
                              <button
                                class="btn-primary-soft btn button-icon btn-delete"
                                style={{paddingLeft: "40px",paddingTop: "12px",paddingBottom: "12px",marginTop: "10px"}}
                              >
                                <font class="tn-in-text">Remove</font>
                              </button>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                   
                  </table>
                </div>
              </center>
            </td>
          </tr> : ( <NotFound/>)}
         
        </tbody>
      </table>
    </div>
  );
}

export default Sside;

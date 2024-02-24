import React from "react";
import BackButton from "../admin/BackButton";
// import notFound from "../img/notfound.svg";
import Date from "../admin/Date";
import Side from "./Side";
import { useEffect, useState } from "react";
import { getAppointment } from "../util/Api";

function ApoinSide() {
  useEffect(() => {
    document.title = "Appointment";
  }, []);

  const [appoinment, setAppoinment] = useState([])
  const [errorMessage ,setErrorMessage] = useState("")
  const [countApp, setCountApp] = useState(0);
  useEffect(() => {
    getAppointment()
    
   .then((data) => {
        setAppoinment(data);
      })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }

  , [])
  


  return (
    <>
      <Side />
      <div className="dash-body">
        <table
          border="0"
          width="100%"
          style={{ borderSpacing: 0, margin: 0, padding: 0, marginTop: "25px" }}
        >
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
                  Appointment
                </p>
              </td>
              <Date />
            </tr>
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
                  All Appointments {countApp}
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
                        <td width="5%" style={{ textAlign: "center" }}>
                          Doctor:
                        </td>
                        <td width="30%">
                          <select
                            name="docid"
                            id=""
                            className="box filter-container-items"
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
            {errorMessage ? <p>{errorMessage} No doctor available</p>:
            <tr>
            <td colspan="4">
              <center>
                <div className="abc scroll">
                  <table width="93%" className="sub-table scrolldown" border="0">
                    <thead>
                      <tr>
                        <th className="table-headin">Patient name</th>
                        <th className="table-headin">Appointment number</th>

                        <th className="table-headin">Doctor</th>
                        <th className="table-headin">Session Title</th>

                        <th className="table-headin" style={{fontSize:"10px"}}>
                          Session Date &amp; Time
                        </th>

                        <th className="table-headin">Appointment Date</th>

                        <th className="table-headin">Events</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appoinment.map((item,index)=>(
                        <tr key ={index}  >
                          {setCountApp(index)}
                        <td style={{fontWeight:"600"}}> &nbsp;{appoinment.name}</td>
                        <td style={{textAlign:"center",fontSize:"23px",fontWeight:"500", color: "var(--btnnicetext)"}}>
                          {appoinment.number}
                        </td>
                        <td>{appoinment.doctor}</td>
                        <td>{appoinment.session}</td>
                        <td style={{textAlign:"center",fontSize:"12px"}}>
                          {appoinment.date} <br />
                          {appoinment.time}
                        </td>

                        <td style={{textAlign:"center"}}>{appoinment.date}</td>

                        <td>
                          <div style={{display:"flex",justifyContent: "center"}}>
                            
                            <a
                              href="?action=drop&amp;id=2&amp;name=Test Patient&amp;session=Test Session&amp;apponum=1"
                              className="non-style-link"
                            >
                              <button
                                className="btn-primary-soft btn button-icon btn-delete"
                                style={{paddingLeft: "40px",paddingTop: "12px",paddingBottom: "12px",marginTop: "10px"}}
                              >
                                <font className="tn-in-text">Cancel</font>
                              </button>
                            </a>
                            &nbsp;&nbsp;&nbsp;
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
            }          
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ApoinSide;

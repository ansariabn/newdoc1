import React from "react";
import BackButton from "../admin/BackButton";
import Date from "../admin/Date";
import PatientSide from "./PatientSide";
import AllSettings from "./AllSettings";

function PSettings() {
  return (

    <div className="container" >
      <PatientSide/>
    <div className="dash-body" style={{marginTop: "15px"}}>
      <table
        border="0"
        width="100%"
        style={{borderSpacing: 0,margin:0,padding:0}}
      >
        <tbody>
          <tr>
            <BackButton/>
            <td>
              <p style={{fontSize: "23px",paddingLeft:"12px",fontWeight: 600}}>
                Settings
              </p>
            </td>
            <Date/>
          </tr>
          <AllSettings/>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default PSettings;

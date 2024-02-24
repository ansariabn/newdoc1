import React from "react";
import BackButton from "../admin/BackButton";
import DeshBoard from "./DeshBoard";
import Date from "../admin/Date";
import AllSettings from "../PatientDeshboard/AllSettings";

function Settings() {
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
                <p
                 className="heading-main12"
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: "rgb(49, 49, 49)",
                  }}
                >
                  Setting
                </p>
              </td>
              <Date />
            </tr>
            <AllSettings/>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Settings;

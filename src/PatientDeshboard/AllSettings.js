import React from "react";

function AllSettings() {
  return (
    <tr>
      <td colspan="4">
        <center>
          <table
            className="filter-container"
            style={{ border: "none" }}
            border="0"
          >
            <tbody>
              <tr>
                <td colspan="4">
                  <p style={{ fontSize: "20px" }}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "25%" }}>
                  <a
                    href="?action=edit&amp;id=2&amp;error=0"
                    className="non-style-link"
                  >
                    <div
                      className="dashboard-items setting-tabs"
                      style={{
                        padding: "20px",
                        margin: "auto",
                        width: "95%",
                        display: "flex",
                      }}
                    >
                      <div
                        className="btn-icon-back dashboard-icons-setting"
                        // style={{
                        //   backgroundImage:"url('../img/icons/doctors-hover.svg')"
                        // }}
                      ></div>
                      <div>
                        <div className="h1-dashboard">
                          Account Settings &nbsp;
                        </div>
                        <br />
                        <div
                          className="h3-dashboard"
                          style={{ fontSize: "15px" }}
                        >
                          Edit your Account Details &amp; Change Password
                        </div>
                      </div>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <p style={{ fontSize: "5px" }}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{ width: "25%" }}>
                  <a href="?action=view&amp;id=2" className="non-style-link">
                    <div
                      className="dashboard-items setting-tabs"
                      style={{
                        padding: "20px",
                        margin: "auto",
                        width: "95%",
                        display: "flex",
                      }}
                    >
                      <div
                        className="btn-icon-back dashboard-icons-setting "
                        // style={{
                        //   backgroundImage:'url("../img/icons/doctors-hover.svg")'
                        // }}
                      ></div>
                      <div>
                        <div className="h1-dashboard">View Account Details</div>
                        <br />
                        <div
                          className="h3-dashboard"
                          style={{ fontSize: "15px" }}
                        >
                          View Personal information About Your Account
                        </div>
                      </div>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <p style={{ fontSize: "5px" }}>&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td style={{ width: " 25%" }}>
                  <a
                    href="?action=drop&amp;id=2&amp;name=i"
                    className="non-style-link"
                  >
                    <div
                      className="dashboard-items setting-tabs"
                      style={{
                        padding: "20px",
                        margin: "auto",
                        width: "95%",
                        display: "flex",
                      }}
                    >
                      <div
                        className="btn-icon-back dashboard-icons-setting"
                        style={{
                          backgroundImage:
                            "url('../img/icons/patients-hover.svg')",
                        }}
                      ></div>
                      <div>
                        <div
                          className="h1-dashboard"
                          style={{ color: "#ff5050" }}
                        >
                          Delete Account
                        </div>
                        <br />
                        <div
                          className="h3-dashboard"
                          style={{ fontSize: "15px" }}
                        >
                          Will Permanently Remove your Account
                        </div>
                      </div>
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </td>
    </tr>
  );
}

export default AllSettings;

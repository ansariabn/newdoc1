import React from "react";
import notFound from "../img/notfound.svg";
function NotFound() {
  return (
    <tr>
      <td colspan="4">
        <center>
          <div class="abc scroll">
            <table width="93%" class="sub-table scrolldown" border="0">
              <tbody>
                <tr>
                  <td colspan="4">
                    <br />
                    <br />
                    <br />
                    <br />
                    <center>
                      <img src={notFound} width="25%" />

                      <br />
                      <p
                        class="heading-main12"
                        style={{
                          marginLeft: "45px",
                          fontSize: "20px",
                          color: "rgb(49, 49, 49)",
                        }}
                      >
                        We couldnt find anything related to your keywords !
                      </p>
                      <a class="non-style-link" href="schedule.php">
                        <button
                          class="login-btn btn-primary-soft btn"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "20px",
                          }}
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
  );
}

export default NotFound;

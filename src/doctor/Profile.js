import React from 'react'

import { useNavigate } from "react-router-dom";
import user from "../img/user.png";
function Profile({title,subTitle}) {

    const navigate = useNavigate()
  const onclick = (e) => {
    navigate('/login');
    console.log("Navigate")
  }

  return (
    <tr>
    <td style={{ padding: "15px" }} colSpan="2">
      <table border="0" className="profile-container">
        <tbody>
          <tr>
            <td width="30%" style={{ paddingLeft: "20px" }}>
              <img
                src={user}
                alt=""
                width="100%"
                style={{ borderRadius: "50%" }}
              />
            </td>
            <td style={{ padding: "0px", margin: "0px" }}>
              <p className="profile-title">{title}</p>
              <p className="profile-subtitle">{subTitle}</p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              
              
                <input
                  type="button"
                  value="Log out"
                  onClick={(e) => onclick(e)}
                  className="logout-btn btn-primary-soft btn"
                />
              
              
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  )
}

export default Profile
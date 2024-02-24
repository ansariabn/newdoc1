import React, { useEffect, useState } from "react";
import "../css/login.css";
import "../css/animations.css";
import "../css/main.css";
import "../css/font-inter.css";
import { loginUser } from "../util/Api";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { Console } from "console";
import { useAuth } from "./AuthProvide";

function Login() {
  const [userlogin, setlogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userlogin;

  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const redirectUrl = location.state?.path || "/";
  console.log(redirectUrl + "Hello i am login" + location);

  const [errorMessage, setErrorMessage] = useState("");

  const handelchange = (e) => {
    setlogin({
      ...userlogin,
      [e.target.name]: e.target.value,
    });
    console.log(userlogin);
  };

  const onSave = async (e) => {
    console.log(userlogin);
    e.preventDefault();
    console.log(location);
    const sucess = await loginUser(userlogin);
    if (sucess) {
      const token = sucess.token;
      auth.userlogin(token);

      const user = localStorage.getItem("userRole");
      console.log(user+ "hello")
      if (user === "admin") {
        navigate("/admin/patientHome");
      } else if (user === "doctor") {
        navigate("/doctor/desh");
      } else {
        navigate("/patient/patientHome");
      }

      navigate(redirectUrl, { replace: true });
    } else {
      setErrorMessage("invalid username or password please try again");
      console.log(redirectUrl);
    }
    setTimeout(() => {
      setErrorMessage("");
    }, 4000);
  };
  useEffect(() => {
    document.title = "Login Page";
    document.body.style.background = "#F6F7FA";
  }, []);

  const usertype = ["a", "d"];
  const naviOther = (e) => {
    // console.log(usertype[0]);

    console.log(userlogin);
    console.log(e);

    if (usertype === usertype[0]) {
      navigate("/admin/desh");
    } else if (usertype === usertype[1]) {
      navigate("/doctor/desh");
    } else {
      // navigate("/admin/desh")
      navigate("/doctor/desh");
      navigate("/patient/patientHome");
    }
  }
  return (
    <>
      <center>
        <div className="login-container">
          {errorMessage && (
            <p style={{ backgroundColor: "red", padding: "5px" }}>
              {errorMessage}
            </p>
          )}
          {/* <div className="form-body"></div> */}
          <form onSubmit={onSave}>
            <table
              border="0"
              style={{ margin: "0", padding: "0", width: "60%" }}
            >
              <tbody>
                <tr>
                  <td>
                    <p className="header-text">Welcome Back!</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="sub-text">
                      Login with your details to continue
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="label-td">
                    <label for="useremail" className="form-label">
                      Email:{" "}
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="label-td">
                    <input
                      type="email"
                      name="email"
                      className="input-text"
                      placeholder="Email Address"
                      required=""
                      onChange={(e) => handelchange(e)}
                      value={email}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label-td">
                    <label for="userpassword" className="form-label">
                      Password:{" "}
                    </label>
                  </td>
                </tr>

                <tr>
                  <td className="label-td">
                    <input
                      type="Password"
                      name="password"
                      className="input-text"
                      placeholder="Password"
                      required=""
                      onChange={(e) => handelchange(e)}
                      value={password}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <br />
                    <label for="promter" className="form-label">
                      &nbsp;
                    </label>{" "}
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="submit"
                      value="Login"
                      className="login-btn btn-primary btn"
                      onClick={naviOther}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <br />
                    <label
                      for=""
                      className="sub-text"
                      style={{ fontWeight: "280" }}
                    >
                      Don't have an account?{" "}
                    </label>
                    <Link to={"/sign"} className="hover-link1 non-style-link ">
                      Sign Up
                    </Link>
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </center>
    </>
  );
}
export default Login

import React from "react";

function EditDoctor({onClose}) {
  return (
    <div id="popup1" className="overlay">
      <div className="popup">
        <center>
          <a className="close" href="doctors.php" onClick={onClose}>
            ×
          </a>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="abc">
              <table
                width="80%"
                className="sub-table scrolldown add-doc-form-container"
                border="0"
              >
                <tbody>
                  <tr>
                    <td className="label-td" colspan="2"></td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        style={{
                          padding: 0,
                          margin: 0,
                          textAlign: "left",
                          fontSize: "25px",
                          fontWeight: "500",
                        }}
                      >
                        Edit Doctor Details.
                      </p>
                      Doctor ID : 2 (Auto Generated)
                      <br />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <form
                        action="edit-doc.php"
                        method="POST"
                        className="add-new-form"
                      >
                        <label for="Email" className="form-label">
                          Email:{" "}
                        </label>
                        <input type="hidden" value="2" name="id00" />
                        <input
                          type="hidden"
                          name="oldemail"
                          value="ans@gmail.com"
                        />
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <input
                        type="email"
                        name="email"
                        className="input-text"
                        placeholder="Email Address"
                        value="ans@gmail.com"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <label for="name" className="form-label">
                        Name:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <input
                        type="text"
                        name="name"
                        className="input-text"
                        placeholder="Doctor Name"
                        value="Dhankni"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>

                  <tr>
                    <td className="label-td" colspan="2">
                      <label for="nic" className="form-label">
                        NIC:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <input
                        type="text"
                        name="nic"
                        className="input-text"
                        placeholder="NIC Number"
                        value="123"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <label for="Tele" className="form-label">
                        Telephone:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <input
                        type="tel"
                        name="Tele"
                        className="input-text"
                        placeholder="Telephone Number"
                        value="1023654789"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <label for="spec" className="form-label">
                        Choose specialties: (CurrentAccident and emergency
                        medicine)
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <select name="spec" id="" className="box">
                        <option value="1">
                          Accident and emergency medicine
                        </option>
                        <option value="2">Allergology</option>
                        <option value="3">Anaesthetics</option>
                        <option value="4">Biological hematology</option>
                        <option value="5">Cardiology</option>
                        <option value="6">Child psychiatry</option>
                        <option value="7">Clinical biology</option>
                        <option value="8">Clinical chemistry</option>
                        <option value="9">Clinical neurophysiology</option>
                        <option value="10">Clinical radiology</option>
                        <option value="11">
                          Dental, oral and maxillo-facial surgery
                        </option>
                        <option value="12">Dermato-venerology</option>
                        <option value="13">Dermatology</option>
                        <option value="14">Endocrinology</option>
                        <option value="15">Gastro-enterologic surgery</option>
                        <option value="16">Gastroenterology</option>
                        <option value="17">General hematology</option>
                        <option value="18">General Practice</option>
                        <option value="19">General surgery</option>
                        <option value="20">Geriatrics</option>
                        <option value="21">Immunology</option>
                        <option value="22">Infectious diseases</option>
                        <option value="23">Internal medicine</option>
                        <option value="24">Laboratory medicine</option>
                        <option value="25">Maxillo-facial surgery</option>
                        <option value="26">Microbiology</option>
                        <option value="27">Nephrology</option>
                        <option value="28">Neuro-psychiatry</option>
                        <option value="29">Neurology</option>
                        <option value="30">Neurosurgery</option>
                        <option value="31">Nuclear medicine</option>
                        <option value="32">Obstetrics and gynecology</option>
                        <option value="33">Occupational medicine</option>
                        <option value="34">Ophthalmology</option>
                        <option value="35">Orthopaedics</option>
                        <option value="36">Otorhinolaryngology</option>
                        <option value="37">Paediatric surgery</option>
                        <option value="38">Paediatrics</option>
                        <option value="39">Pathology</option>
                        <option value="40">Pharmacology</option>
                        <option value="41">
                          Physical medicine and rehabilitation
                        </option>
                        <option value="42">Plastic surgery</option>
                        <option value="43">Podiatric Medicine</option>
                        <option value="44">Podiatric Surgery</option>
                        <option value="45">Psychiatry</option>
                        <option value="46">
                          Public health and Preventive Medicine
                        </option>
                        <option value="47">Radiology</option>
                        <option value="48">Radiotherapy</option>
                        <option value="49">Respiratory medicine</option>
                        <option value="50">Rheumatology</option>
                        <option value="51">Stomatology</option>
                        <option value="52">Thoracic surgery</option>
                        <option value="53">Tropical medicine</option>
                        <option value="54">Urology</option>
                        <option value="55">Vascular surgery</option>
                        <option value="56">Venereology</option>{" "}
                      </select>
                      <br />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <label for="password" className="form-label">
                        Password:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <input
                        type="password"
                        name="password"
                        className="input-text"
                        placeholder="Defind a Password"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <label for="cpassword" className="form-label">
                        Conform Password:{" "}
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="label-td" colspan="2">
                      <input
                        type="password"
                        name="cpassword"
                        className="input-text"
                        placeholder="Conform Password"
                        required=""
                      />
                      <br />
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2">
                      <input
                        type="reset"
                        value="Reset"
                        className="login-btn btn-primary-soft btn"
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="submit"
                        value="Save"
                        className="login-btn btn-primary btn"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </center>
        <br />
        <br />
      </div>
    </div>
  );
}

export default EditDoctor;

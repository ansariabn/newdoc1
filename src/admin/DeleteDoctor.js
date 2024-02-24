import React from "react";

function DeleteDoctor({onClose}) {
  return (
    <div id="popup1" class="overlay">
      <div class="popup">
        <center>
          <h2>Are you sure?</h2>
          <a class="close" href="doctors.php" onClick={onClose} >
            ×
          </a>
          <div class="content">
            You want to delete this record
            <br />
            (Dhankni).
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="delete-doctor.php?id=2" class="non-style-link">
              <button
                class="btn-primary btn"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <font class="tn-in-text">&nbsp;Yes&nbsp;</font>
              </button>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="doctors.php" class="non-style-link">
              <button
                class="btn-primary btn"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <font class="tn-in-text">&nbsp;&nbsp;No&nbsp;&nbsp;</font>
              </button>
            </a>
          </div>
        </center>
      </div>
    </div>
  );
}

export default DeleteDoctor;

import React from 'react'

function ViewDoctor(onClose) {
  return (
    <div id="popup1" className="overlay">
                    <div className="popup">
                    <center>
                        <h2></h2>
                        <a className="close" href="doctors.php" onClick={onClose} >×</a>
                        <div className="content">
                            eDoc Web App<br/>
                            
                        </div>
                        <div style={{display: "flex",justifyContent: "center"}}>
                        <table width="80%" className="sub-table scrolldown add-doc-form-container" border="0">
                        
                            <tbody><tr>
                                <td>
                                    <p style={{padding: 0,margin: 0,textAlign: "left",fontSize: "25px",fontWeight: 500}}>View Details.</p><br/><br/>
                                </td>
                            </tr>
                            
                            <tr>
                                
                                <td className="label-td" colspan="2">
                                    <label for="name" className="form-label">Name: </label>
                                </td>
                            </tr>
                            <tr>
                                <td className="label-td" colspan="2">
                                    Dhankni<br/><br/>
                                </td>
                                
                            </tr>
                            <tr>
                                <td className="label-td" colspan="2">
                                    <label for="Email" className="form-label">Email: </label>
                                </td>
                            </tr>
                            <tr>
                                <td className="label-td" colspan="2">
                                ans@gmail.com<br/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td className="label-td" colspan="2">
                                    <label for="nic" className="form-label">NIC: </label>
                                </td>
                            </tr>
                            <tr>
                                <td className="label-td" colspan="2">
                                123<br/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td className="label-td" colspan="2">
                                    <label for="Tele" className="form-label">Telephone: </label>
                                </td>
                            </tr>
                            <tr>
                                <td className="label-td" colspan="2">
                                1023654789<br/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td className="label-td" colspan="2">
                                    <label for="spec" className="form-label">Specialties: </label>
                                    
                                </td>
                            </tr>
                            <tr>
                            <td className="label-td" colspan="2">
                            Accident and emergency medicine<br/><br/>
                            </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <a href="doctors.php"><input type="button" value="OK" className="login-btn btn-primary-soft btn"/></a>
                                
                                    
                                </td>
                
                            </tr>
                           

                        </tbody></table>
                        </div>
                    </center>
                    <br/><br/>
            </div>
            </div>
  )
}

export default ViewDoctor

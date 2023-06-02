import React, { Fragment } from "react";
import {  useNavigate } from "react-router-dom";
function Edit(){
    const navigate = useNavigate();

  const submitHandle = (event) => {
    event.preventDefault();
    window.alert("Update successfully!");
    navigate("/info");
  };
    return(
        <Fragment>
        <form onSubmit={submitHandle}>
        <h4>New Username: </h4>
        <input type="text" id="newUsr" name="newUsername" placeholder="Enter your new username"/>
        <h4>New Email: </h4>
        <input type="text" id="newEmail" name="newEmail" placeholder="Enter your new email"/>
        <h4>New Password: </h4>
        <input type="password" id="newPwd" name="newPassword" placeholder="Enter your new password"/>
        <button type="submit">Update</button>
    </form>
    {/* <a href="info.html">
        <button type="submit">Edit</button>
    </a> */}
        </Fragment>
    );
}
export default Edit;
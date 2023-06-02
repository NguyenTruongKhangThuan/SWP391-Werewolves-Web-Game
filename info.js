import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Info(){
    return(
        <Fragment>
          <div className="Information">
        <div style={{ display: "flex" }}>
            <h3>Username: </h3><p>User 01</p><br/>
        </div>
        <div style={{ display: "flex" }}>
            <h3>Email: </h3><p>user01@test.com</p><br/>
        </div>
        <div style={{ display: "flex" }}>
            <h3>Level: </h3><p>Level 10</p><br/>
        </div>
    </div>
    <div className="buttons">
        {/* <a href="edit.html">
            <button type="submit">Edit</button>
        </a> */}
        <Link to='/edit'>
        <button type="submit">Edit</button>
        </Link>
        <br/>
        {/* <a href="index_mainpage.html">
            <button type="submit">Return</button>
        </a> */}
        <Link to="/mainpage">
        <button type="submit">Return</button>
        </Link>
    </div>
        </Fragment>
    );
}
export default Info;
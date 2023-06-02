import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Setting(){
    return(
        <Fragment>
          <h3>Room ID: 123456</h3>
    <h3>Room Status: Public</h3>
    <div class="change">
        {/* <a href="change.html">
            <button type="submit">Change information</button>
        </a> */}
        <Link to='/change'>
            <button>Change Infomation</button>
        </Link>
        <Link to='/gamepage'>
           <button>Return</button> 
        </Link>
    </div>
        </Fragment>
    );
}
export default Setting;
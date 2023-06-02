import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Welcome(){
    return(
        <Fragment>
          <h3>Welcome to Werewolves Web Page</h3>
          {/* <a href="">About</a>
          <a href="">What is Werewolves?</a>
          <a href="">Roles</a>
          <a href="">FAQs</a> */}
          <Link to=''>
            <button>About</button>
        </Link>
        <Link to=''>
            <button>What is Werewolf?</button>
        </Link>
        <Link to=''>
            <button>Roles</button>
        </Link>
        <Link to=''>
            <button>FAQs</button>
        </Link>
          {/* <a href="login.html">
        <button type="submit">Play</button>
    </a> */}
        <Link to='/login'>
            <button>Play</button>
        </Link>
        </Fragment>
    );
}
export default Welcome;

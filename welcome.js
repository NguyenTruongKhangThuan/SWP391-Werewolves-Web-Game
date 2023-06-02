import React, { Fragment } from "react";
function Welcome(){
    return(
        <Fragment>
          <h3>Welcome to Werewolves Web Page</h3>
          <a href="#">About</a>
          <a href="#">What is Werewolves?</a>
          <a href="#">Roles</a>
          <a href="#">FAQs</a>
          <a href="login.html">
        <button type="submit">Play</button>
    </a>
        </Fragment>
    );
}
export default Welcome;
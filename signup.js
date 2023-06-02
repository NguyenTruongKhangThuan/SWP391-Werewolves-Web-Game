import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup(){
    const navigate = useNavigate();

    const submitHandle = event =>{
        event.preventDefault();
        
		navigate('/mainpage');
    }

    return(
        <Fragment>
          <div className="signup">
        <form onSubmit={submitHandle}>
            <label for="chk" aria-hidden="true">Sign Up</label>
            <input type="username" name="username" placeholder="Username" required=""/>
            <input type="email" name="email" placeholder="Email" required=""/>
            <input type="password" name="pswd" placeholder="Password" required=""/>
            <button type="submit" >Sign Up</button>
        </form>
        <h4>Already have an account?</h4>
		{/* <a href="login.html">Log In Here</a> */}
        <Link to='/login'>
            <button>Log in here</button>
        </Link>
    </div>
        </Fragment>
    );
}
export default Signup;

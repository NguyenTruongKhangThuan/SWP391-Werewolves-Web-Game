import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login(){
	const navigate = useNavigate();

    const submitHandle = event =>{
        event.preventDefault();
        
		navigate('/mainpage');
    }
    return(
        <Fragment>
    <div className="main">  	
		<div className="login">
			<form onSubmit={submitHandle}>
				<label for="chk" aria-hidden="true">Login</label>
				<input type="email" name="email" placeholder="Email" required=""/>
				<input type="password" name="pswd" placeholder="Password" required=""/>
				<button type="submit">Login</button>
			</form>
		</div>
		<h4>Don't have account yet?</h4>
		{/* <a href="signup.html">Sign Up Here</a> */}
		<Link to='/signup'>
		    Don't have account yet?
		</Link>
	</div>
        </Fragment>
    );
}
export default Login;


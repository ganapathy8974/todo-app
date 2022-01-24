import React,{useState} from "react";
import AuthenticationService from "./AuthenticationService";
import {useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState("ganu");
    const [password, setPassword] = useState("")
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [hasLoginSuccess, setHasLoginSuccess] = useState(false);
    let navigate = useNavigate();    
    const handleUsernameChange = (event) =>{
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }

    const loginClicked = () =>{
       
        if(username === "ganu" && password === "12345"){
            AuthenticationService.registerSuccess(username,password)
            setHasLoginFailed(false);
            // setHasLoginSuccess(true);
            navigate('/welcome/' + username);
           
        }else{
            setHasLoginFailed(true);
            // setHasLoginSuccess(false);
        }
    }

    return(
        <div className="login">
            {hasLoginFailed && <h4 className="alert alert-warning">Login Failed</h4>}
            {/* {hasLoginSuccess && <h4>Login Success</h4>} */}
            <div className="container">
                Username <input type="input" value={username} name = "username" id="username" onChange={handleUsernameChange}></input>
                Password <input type="password" value = {password} name = "password" id="password" onChange={handlePasswordChange} ></input>
                <button className="btn btn-success m-1" onClick={loginClicked}> Login </button>
            </div>
        </div>
    )
}



export default Login;
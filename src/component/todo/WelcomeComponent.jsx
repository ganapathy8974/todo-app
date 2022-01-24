import React, { useState } from "react";
import {useParams,Link} from "react-router-dom";
import HelloworldService from "../../api/todo/HelloworldService.js"

function WelcomeComponent(){
    let { name } = useParams();
    const[message, setMessage] = useState('');
    const getMessage = () => {
        // HelloworldService.excuteHelloworldBeenService()
        // .then(response => handleWelcomeresponse(response))

        HelloworldService.excuteHelloworldBeenPathVarService(name)
        .then(response => handleWelcomeresponse(response))
        .catch(error => handleError(error))
    }

    const handleWelcomeresponse =(response) =>{
        setMessage(response.data.message)
    }

    const handleError = (error) => {
        console.log(error.response)
    }

    return(
        <div className="container">
            <h1>Welcome {name}</h1>
            <h5>{name},if you want to Go to Todomanage Page <Link to="/todos">Click here</Link></h5>
            <h5>{name}, Get Custom Message <button className="btn btn-success" onClick={getMessage}>Click Me</button></h5>
            <div className="container">
                {message}
            </div>
        </div>
    )
}

export default WelcomeComponent;
import { useState } from "react";
import "./Counter.css"
 

function Counter(){
    return(
        <div className="Counter">
            <CounterButton by={1}/>
            <CounterButton by={5}/>
            <CounterButton by={10}/>
            <Count/>
            <ResetButton/>
        </div>
    );
}

function Count(props){
    const [count, setCount] = useState(0);
    return(
        <div className="count">{count}</div>
    )
}
  
function CounterButton(props){    
    return(
        <div className="CounterButton">
            <button sign="+" val = {props.by} onClick={()=>{}}>+ {props.by}</button>
            <button sign="-" val = {props.by} onClick={()=>{}}>- {props.by}</button>
        </div>
    );
}

function ResetButton(){
    return(
        <button className="reset" onClick={()=>{}}>Reset</button>        
    )
}



export default Counter;
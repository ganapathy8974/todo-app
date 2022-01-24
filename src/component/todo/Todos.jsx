import React,{useState} from "react";

function Todos(){  
    const [todos, setTodos] = useState([
        {id:1, discription:"Do Some Thing", targetDate: new Date , done:false},
        {id:2, discription:"Love Some One", targetDate: new Date , done:false},
        {id:3, discription:"Love is Not Life", targetDate: new Date , done:false},
    ])
    return(
        <div className="Todos">
            <h1>Todo Page</h1>
            <div className="container">
                <table className="table table-responsive table-striped">
                    <thead>
                        <tr>                    
                        <th>Discription</th>
                        <th>Target Date</th>
                        <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo =>
                                <tr>
                                    <td>{todo.discription}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>{todo.done.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Todos;
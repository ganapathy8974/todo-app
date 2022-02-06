import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import TodosDataService from "../../api/todo/TodosDataService";
import AuthenticationService from "./AuthenticationService";

function Todos(){  
    const [todos, setTodos] = useState([])
    const [msg, setMsg] = useState([])
    const navigate = useNavigate();
    let username = AuthenticationService.getLogedinUser();

    useEffect(() => {
        refreshTodos();
    },[])

    const deleteTodoClicked = (id) =>{
        TodosDataService.deleteTodo(id,username)
        .then(response => {           
            setMsg({message : `todo ${id} is Deleted`})
            refreshTodos();
        })       
    }

    const updateTodoClicked = (id) =>{              
        navigate(`/todo/${id}`)
    }

    const refreshTodos = () => {
        TodosDataService.getTodos(username)
        .then(response =>{setTodos(response.data)})
    }

    return(
        <div className="Todos">
            <h1>Todo Page</h1>
            <div className="container">
                {msg.message != null && <div className="alert alert-success">{msg.message}</div>}
                <table className="table table-responsive table-striped">
                    <thead>
                        <tr>                    
                        <th>Discription</th>
                        <th>Target Date</th>
                        <th>Done</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.date.toString()}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td><button onClick={()=> updateTodoClicked(todo.id)} className="btn btn-success">Update</button></td>
                                    <td><button onClick={()=> deleteTodoClicked(todo.id)} className="btn btn-warning">Delete</button></td>
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
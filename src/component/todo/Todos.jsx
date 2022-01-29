import React,{useEffect, useState} from "react";
import { Navigate } from "react-router";
import TodosDataService from "../../api/todo/TodosDataService";
import AuthenticationService from "./AuthenticationService";

function Todos(){  
    const [todos, setTodos] = useState([])
    let username = AuthenticationService.getLogedinUser();

    useEffect(() => {
        refreshTodos();
    },[])

    const deleteTodoClicked = (id) =>{
        TodosDataService.deleteTodo(id,username)
        .then(response => {
            refreshTodos();
            setTodos({message : `todo ${id} is Deleted`})
        })       
    }

    const updateTodoClicked = (id) =>{
        // TodosDataService.deleteTodo(id,username)
        // .then(response => {
        //     refreshTodos();
        //     setTodos({message : `todo ${id} is Deleted`})
        // })       
        window.history.replaceState(null, "New Page Title", `/todo/${id}`);
        //console.log('hi')
    }

    const refreshTodos = () => {
        TodosDataService.getTodos(username)
        .then(response =>{setTodos(response.data)})
    }

    return(
        <div className="Todos">
            <h1>Todo Page</h1>
            <div className="container">
                <div className="alert alert-success">{todos.message}</div>
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
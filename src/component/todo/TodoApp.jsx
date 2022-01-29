import React,{useState} from "react";
import { BrowserRouter as Router, Link, Route,Routes, useNavigate, useParams} from "react-router-dom";
import HeaderComponent from "./HeaderComponent.jsx";
import AuthenticatedRoute from "./AthenticatedRoute";
import Login from "./Login.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import Todos from "./Todos.jsx";
import FooterComponent from "./FooterComponent.jsx";
import Logout from "./Logout.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import UpdateTodos from "./UpdateTodos.jsx";

function TodoApp(){
    return(
        <div className="todo-app">
           <Router>               
               <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path="/*" element={<ErrorComponent/>}></Route>
                    <Route path='/welcome/:name' element={<AuthenticatedRoute><WelcomeComponent/></AuthenticatedRoute>}> </Route>  
                    <Route path="/todos" element={<AuthenticatedRoute><Todos/></AuthenticatedRoute>}></Route>
                    <Route path="/todo/:id" element={<AuthenticatedRoute><UpdateTodos/></AuthenticatedRoute>}></Route>              
                    <Route path="/logout" element={<AuthenticatedRoute><Logout/></AuthenticatedRoute>}></Route>
                </Routes>
                <FooterComponent/>                
            </Router>
        </div>
    )
}

export default TodoApp;
import axios from "axios";
import { API_URL } from "../../Constants";

class TodosDataService{

    getTodos(name){
       return axios.get(`${API_URL}/users/${name}/todos`);
    }

    getTodo(name,id){
        return axios.get(`${API_URL}/users/${name}/todo/${id}`);
     }

    deleteTodo(id,name){
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(id,name,todo){
        return axios.put(`${API_URL}/users/${name}/todos/${id}`,todo);
    }

    createTodo(id,name,todo){
        return axios.post(`${API_URL}/users/${name}/todos/`,todo);
    }
    
}

export default new TodosDataService();
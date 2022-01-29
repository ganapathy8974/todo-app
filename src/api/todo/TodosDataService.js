import axios from "axios";

class TodosDataService{

    getTodos(name){
       return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    deleteTodo(id,name){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

}

export default new TodosDataService();
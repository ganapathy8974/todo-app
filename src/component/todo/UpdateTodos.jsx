import { useParams } from "react-router";

function UpdateTodos(){
    let { id } = useParams();
    return(
        <div>
            <h4>param = {id}</h4>
        </div>
    );
}

export default UpdateTodos;
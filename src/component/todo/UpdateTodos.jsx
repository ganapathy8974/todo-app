import { useNavigate, useParams } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import { useEffect, useState } from "react";
import TodosDataService from "../../api/todo/TodosDataService";
import AuthenticationService from "./AuthenticationService";

function UpdateTodos(){
    //let { pathid } = useParams();
    let name = AuthenticationService.getLogedinUser();
    const [id,setID] = useState(useParams());
    const [description,setDescription] = useState("");
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
    const navigate = useNavigate();
    const onSubmit = (value) => {
        if(id.id === -1){
            TodosDataService.updateTodo(name,{
                id : id.id,
                description: value.description,
                date: date,
            })
            .then(response => {
                navigate(`/todos`);
            })
        }else{
            TodosDataService.updateTodo(id.id,name,{
                id : id.id,
                description: value.description,
                date: date,
            })
            .then(response => {
                navigate(`/todos`);
            })
        }
        //console.log(value);
    }
    const validate = () => {

    }

    useEffect(() => {
        if(id.id === -1){
            return
        }
        TodosDataService.getTodo(name, id.id)
        .then(response => {
            setDescription(response.data.description); 
            setDate(moment(response.data.date).format('YYYY-MM-DD'));
        })
    },[])

    return(
        <div>
           <h1>Update Todo</h1>
           <div className="container">
           <Formik
                        initialValues={{ description, date }}
                        onSubmit={onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="date" />
                                    </fieldset>
                                    <br/>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
           </div>
        </div>
    );
}

export default UpdateTodos;
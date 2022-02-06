import { useParams } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import { useState } from "react";

function UpdateTodos(){
    //let { id } = useParams();
    const [id,setID] = useState(useParams());
    const [description,setDescription] = useState("Tom and Jerry");
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
    const onSubmit = (value) => {
        console.log(value);
    }
    const validate = () => {

    }
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
import { Fragment } from "react";

//estyles
import '../styles/CreateTodoButton.style.css'

const CreateTodoButton = () => {
    //fUNCIONES
    const onClickButton = (msg) =>{
        alert(msg);
    }
    return (
        <Fragment>
            <button className="btn-add" onClick={() => onClickButton('Click en btn Crear')} >+</button>
        </Fragment>
    )
};

export default CreateTodoButton;

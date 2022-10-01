import React, { Fragment } from "react";

//Styles
import '../styles/TodoItems.styles.css'
//icons
import {MdCheck, MdOutlineFavorite, MdDeleteOutline}  from "react-icons/md";

const TodoItems = (props) => {

 
    return (
       <Fragment>
     
            <li>
                <div className="container-items">
             
                <button className={`completed ${props.completed && 'completed-active'} `} onClick={props.onComplite}><MdCheck/></button>
        

                <div className="container-tasks">
                <p className={props.completed ? 'parrafo-active' : ''}>{props.text}</p>
                <label>  {props.date}  <button onClick={props.onFavorite} className={`favoritebtn ${props.favorite && 'favoritebtn-active'}`}> <MdOutlineFavorite /></button></label>
                </div>
                <div className="container-items_options">
                 <button onClick={props.onDelete}><MdDeleteOutline/></button>
                </div>
         
                </div>
            </li>

       </Fragment>
    )
};

export default TodoItems;

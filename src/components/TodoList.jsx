import React, { Fragment } from "react";

//Styles
import '../styles/TodoList.styles.css'
//icons
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {MdOutlineFavorite, MdCheckBox} from "react-icons/md";

const TodoList = (props) => {

    return (
        <Fragment>
            <section className="taks-container">
            <div className="taks-info">
                <div className="taks-info_description">
                    <p> <AiOutlineUnorderedList/> All ToTasks</p>
                </div>
                <div className="taks-info-options"> 
                <div className="taks-info-options_favorite">
                <div>{props.todoFavorite}</div>
                <button> <MdOutlineFavorite/> Favorite</button>  
                </div> 
                <div className="tks-info-options_complete">
                <div>{props.todoCompleted}</div>
                 <button><MdCheckBox/> Completed</button>
                </div>
                 <p>Order by</p> 
                </div>
            </div>
            <section className="taks">
            
                <ul>
                    {props.children} 
                </ul>
            </section>
            </section>
        </Fragment>
    )
};

export default TodoList;

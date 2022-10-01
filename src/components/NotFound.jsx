import React, { Fragment } from "react";
import '../styles/NotFound.style.css'
const NotFound = (props) => {
        /*
        <div className="wrapper" >
        <span className="loader"></span>
        </div>
         */
        
    return (
        <Fragment>
        
        <div className="container">
            <img src={props.img} alt={props.message} />
            <h1>{props.message}</h1>
        </div>

        </Fragment>
    )
};

export default NotFound;

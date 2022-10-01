import React, { Fragment, useState } from "react";

//icons
import {IoSearchSharp} from 'react-icons/io5';
//Styles
import '../styles/TodoSearch.style.css'

const TodoSearch = ({search, setSearch}) => {
   
    const onSearch = (event) =>{
        setSearch(event.target.value);
    }
    //console.log(search);
    return (
        <Fragment>
            <div className="input-search">
                <input placeholder="Search.." onChange={onSearch} value={search} />
                <IoSearchSharp/>
            </div>
        </Fragment>
    )
};

export default TodoSearch;

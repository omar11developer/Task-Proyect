import React from "react";

//Icons
import { IoMdCreate, IoMdPerson } from "react-icons/io";

//styles
import "../styles/TodoCounter.style.css";

const TodoCounter = ({total, completed}) => {
  return (
    <div className="contianer-tittle">
      <div className="tittle">
        <h1>
          To<span>Tasks</span>
        </h1>
         <p className="name"> <IoMdPerson/> Joel Omar Menjivar</p>
        <h3>
          Has completado <span className="tittle-span1">{completed}</span> de{" "}
          <span className="tittle-span2">{total}</span> Tasks{" "}
        </h3>
      </div>
      <div className="perfil">
      <div className="container-img">
            <p>J
            </p>
      </div>
      <div className="perfil-edit">
        <IoMdCreate/>
      </div>
      </div>
    </div>
  );
};

export { TodoCounter };

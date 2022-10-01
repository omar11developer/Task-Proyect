import React, { Fragment } from "react";

//Components
import { TodoCounter } from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import CreateTodoButton from "./CreateTodoButton";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";
import NotFound from "./NotFound";


const AppUI = ({
    totalTodos,
    todoCompleted,
    search,
    setSearch,
    searchedTodos,
    todoFavorite,
    NotFoundImg,
    completeTodo,
    favoriteTodo,
    deleteTodo
}) => {
  return (
    <Fragment>
      <TodoCounter total={totalTodos} completed={todoCompleted} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList todoCompleted={todoCompleted} todoFavorite={todoFavorite}>
        {searchedTodos.length === 0 ? (
          <NotFound message="It was not found" img={NotFoundImg} />
        ) : (
          searchedTodos.map((todo) => (
            <TodoItems
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              date={todo.date}
              favorite={todo.favorite}
              onComplite={() => completeTodo(todo.text)}
              onFavorite={() => favoriteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))
        )}
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  );
};

export default AppUI;

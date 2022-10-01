//import './App.css';
import { useState } from "react";

//import img
import NotFoundImg from './img/notFound.svg'

//Data Array
import { Tacks } from "./data/Tacks";
import AppUI from "./components/AppUI";


function App() {
  const [todos, setTodos] = useState(Tacks);
  const [search, setSearch] = useState('');
 

  const todoCompleted = todos.filter((todo) => !!todo.completed).length;
  const todoFavorite = todos.filter((todo) => !!todo.favorite).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      const result = todoText.includes(searchText);
      return result;
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }
  const favoriteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos= [...todos];
    newTodos[todoIndex].favorite=true;
    setTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  
  return (
    <AppUI
    totalTodos={totalTodos}
    todoCompleted={todoCompleted}
    search={search}
    setSearch={setSearch}
    searchedTodos={searchedTodos}
    todoFavorite={todoFavorite}
    NotFoundImg={NotFoundImg}
    completeTodo={completeTodo}
    favoriteTodo={favoriteTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
